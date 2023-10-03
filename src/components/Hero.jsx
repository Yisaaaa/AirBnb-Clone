import React from "react";
import heroImg from "../hero.svg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-img-container">
        <img src={heroImg} className="hero-img" />
      </div>
      <div className="hero-text-box">
        <h1 className="primary--heading">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
