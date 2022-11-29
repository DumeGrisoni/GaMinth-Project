import React from "react";
import groq from "groq";
import { getClient } from "../../lib/sanity.server";
import Tag from "../../components/Blog/Tag";

const Article = ({ article }) => {
  const {
    title,
    contenu,
    Bio,
    avatar,
    Auteur,
    categories,
    publishedAt,
    miniature,
  } = article;
  return (
    <article className="article">
      <section className="article-page-infos">
        <h1> {title} </h1>
        <p> {Bio} </p>
        <div>
          {categories?.map((category) => (
            <p> {category.title} </p>
          ))}
        </div>
      </section>
      <section className="article-content">
        <p> {contenu} </p>
      </section>
    </article>
  );
};

const req = groq`*[_type == "article" && slug.current == $slug][0]{
  title,
  "Auteur" : author,
  "Bio" : author->bio,
  "categories" : categories[]->{title},
  "avatar" : author->avatar,
  contenu,
  publishedAt,
  miniature,
}`;

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "article" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const article = await getClient(preview).fetch(req, {
    slug: params.slug,
  });
  return {
    props: {
      article,
    },
  };
}

export default Article;
