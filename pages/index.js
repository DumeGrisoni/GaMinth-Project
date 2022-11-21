import groq from "groq";
import { getClient } from "../lib/sanity.server";
import Image from "next/image";
import logo from "../public/logo.png";
import Card from "../components/Card";
import Link from "next/link";
import Head from "next/head";

const Home = ({ articles }) => {
  return (
    <div className="main-page">
      <section className="hero-section">
        <div className="hero-card">
          <Head>
            <title>GaMinth</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <section className="hero-text">
            <Image src={logo} width={150} height={150} />
            <h1>GaMinth.</h1>
            <br />
            <p>
              Tout sur la création d’asset de jeux video de manière à ce que
              tous puissent en profiter !
            </p>
            <br />
            <Link href={"/"}>
              <h3>En savoir plus . . .</h3>
            </Link>
            <div className="underline"></div>
          </section>
        </div>
      </section>

      <section className="articles-container">
        <div className="section-title">
          <h3>Dernier article</h3>
        </div>
        {articles.map((article) => (
          <Link href="/" key={article._id}>
            <Card article={article} />
          </Link>
        ))}
      </section>
    </div>
  );
};

// Creation d'un objet contenant les données de l'API

export async function getStaticProps({ preview = true }) {
  const articles = await getClient(preview).fetch(groq`
    *[_type == "article" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      title,
      "Auteur": author->author,
      "Categories": categories[]->{id, title, description, logo},
      "ImageProfil": author->avatar,
      "Miniature" : miniature,
      slug,
      "Publication" : publishedAt,
    }`);
  return {
    props: {
      articles,
    },
  };
}

export default Home;
