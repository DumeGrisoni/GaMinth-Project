import groq from "groq";
import { getClient } from "../lib/sanity.server";
import Card from "../components/Card";
import Link from "next/link";
import Head from "next/head";

const Home = ({ articles }) => {
  return (
    <section>
      <Head>
        <title>GaMinth</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="articles-container">
        {articles.map((article) => (
          <Link href={"/"} key={article._id}>
            <Card article={article} />
          </Link>
        ))}
      </section>
    </section>
  );
};

// Creation d'un objet contenant les données de l'API

export async function getStaticProps({ preview = true }) {
  const articles = await getClient(preview).fetch(groq`
    *[_type == "article" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      title,
      "Auteur": author->author,
      "Categories": categories[]->{id, title},
      "ImageProfil": author->avatar,
      "Miniature" : miniature,
      slug,
      "Publication" : publishedAt
    }`);
  return {
    props: {
      articles,
    },
  };
}

export default Home;
