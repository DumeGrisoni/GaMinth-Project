import React from "react";
import Link from "next/link";
import Card from "../../components/Blog/Card";

const ArticlesContainer = ({ articles }) => {
  return (
    <>
      <div className="section-title">
        <h3>Dernier article</h3>
      </div>
      <section className="articles-container">
        {articles.map((article) => (
          <Link href="/" key={article._id}>
            <Card article={article} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default ArticlesContainer;
