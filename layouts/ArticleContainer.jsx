import React from "react";
import Link from "next/link";
import Card from "../components/Card";

const ArticleContainer = ({ articles }) => {
  return (
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
  );
};

export default ArticleContainer;
