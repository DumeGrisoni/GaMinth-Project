import { urlFor } from "../../lib/sanity";

const Card = ({ article }) => {
  const { Miniature, title, ImageProfil, Auteur, Publication } = article;

  return (
    <section className="card-container">
      <section>
        <img src={urlFor(Miniature)} alt={"image de " + title} />
        <h2>{title}</h2>
      </section>

      <br />
      <div className="infos-container">
        <img
          src={urlFor(ImageProfil)}
          alt={"image de profil de " + Auteur}
          className="img-profil"
        />
        <div className="info">
          <p>
            Par : <b>{Auteur.toUpperCase()}</b>
          </p>
          <br />
          <p>Le : {new Date(Publication).toDateString()}</p>
        </div>
      </div>
      <div className="tags-logo">
        {article.Categories.map((category) => (
          <img
            src={urlFor(category.logo)}
            alt={"Logo de " + category.title}
            key={category.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Card;
