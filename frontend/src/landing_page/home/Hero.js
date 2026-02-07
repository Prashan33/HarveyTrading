import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-wrap">
      <div className="hero-inner mb-5">
        <h1 className="hero-title">Trading &amp; Investing</h1>

        <p className="hero-subtitle">
          Discover How Harvey&apos;s Trading and Investing Tools Can Help <br />
          Achieve Your Financial Goals
        </p>

        <button className="hero-btn">Open Your Account</button>
      </div>

      <div className="hero-image-wrap">
        <img src="media/images/home.png" alt="hero" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
