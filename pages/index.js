import groq from "groq";
import { getClient } from "../lib/sanity.server";

const Home = ({ articles }) => {
  console.log(articles);
  return <></>;
};

export async function getStaticProps({ preview = false }) {
  const articles = await getClient(preview).fetch(groq`
    *[_type == "article" && publishedAt < now()] | order(publishedAt desc) {
      _id,
      title,
      "username": author->author,
      "categories": categorie[]->{id, title},
      "authorImage": author->avatar,
      miniature,
      slug,
      publishedAt
    }`);
  return {
    props: {
      articles,
    },
  };
}

export default Home;
