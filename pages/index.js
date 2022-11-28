import groq from "groq";
import { getClient } from "../lib/sanity.server";

import Hero from "../components/Hero";
import CategoryContainer from "../components/CategoryContainer";
import ArticleContainer from "../layouts/ArticleContainer";
import Header from "../layouts/Header";

const Home = ({ articles, categories }) => {
  console.log(categories);
  return (
    <div className="main-page">
      <Header />
      <Hero />
      <CategoryContainer categories={categories} />
      <ArticleContainer articles={articles} />
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
  const categories = await getClient(preview).fetch(groq`
     *[_type == "category"] {
        _id,
        title,
     }`);
  return {
    props: {
      articles,
      categories,
    },
  };
}

export default Home;
