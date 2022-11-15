import { urlFor } from "../lib/sanity";

const Card = ({ article }) => {
  console.log(article);
  return (
    <section className="card-container">
      <h2>{article.title}</h2>
      <p>Publié le: {new Date(article.Publication).toDateString()}</p>
      <img
        src={urlFor(article.Miniature)}
        alt={article.title + "image"}
        className="miniature"
      />

      <br />
      <div className="infos-container">
        <p>Posté par {article.Auteur}</p>
        <img
          src={urlFor(article.ImageProfil)}
          alt={"image de profil de " + article?.Auteur}
          className="img-profil"
        />
      </div>
      <div className="tags-container">
        {/* {article.categories.map((categorie) => (
          <Tag title={categorie.title} key={categorie.id} />
        ))} */}
      </div>
    </section>
  );
};

export default Card;
