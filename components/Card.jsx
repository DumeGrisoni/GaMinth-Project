import { urlFor } from "../lib/sanity";

const Card = ({ article }) => {
  return (
    <section className="card-container">
      <section>
        <img
          src={urlFor(article.Miniature)}
          alt={"image de " + article.title}
          className="miniature"
        />
        <h2>{article.title}</h2>
      </section>

      <br />
      <div className="infos-container">
        <img
          src={urlFor(article.ImageProfil)}
          alt={"image de profil de " + article?.Auteur}
          className="img-profil"
        />
        <div className="info">
          <p>
            Par : <b>{article.Auteur.toUpperCase()}</b>
          </p>
          <br />
          <p>Le : {new Date(article.Publication).toDateString()}</p>
        </div>
      </div>
      <div className="tags-logo">
        {article.Categories.map((category) => (
          <img src={urlFor(category.logo)} alt={"Logo de " + category.title} />
        ))}
      </div>
    </section>
  );
};

export default Card;
