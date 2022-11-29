import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-card">
        <section className="hero-text">
          <Image src={logo} width={150} height={150} alt="Logo de GaMinth" />
          <h1>GaMinth.</h1>
          <br />
          <p>
            Tout sur la création d’asset de jeux video de manière à ce que tous
            puissent en profiter !
          </p>
          <br />
          <Link href={"/"}>
            <h3>En savoir plus . . .</h3>
          </Link>
          <div className="underline"></div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
