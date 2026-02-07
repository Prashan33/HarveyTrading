import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We built a modern investing platform for everyday Americans.
          <br />
          Now we’re raising the bar with speed, transparency, and tech.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-12 col-lg-6 p-5">
          <p>
            Harvey Trading launched with one simple idea: Wall Street tools
            shouldn’t be limited to Wall Street people. We focus on keeping fees
            fair, support fast, and the experience clean—so you can invest with
            confidence.
          </p>
          <p>
            Our approach is straightforward: transparent pricing, reliable
            execution, and a platform designed to help you make smarter
            decisions—without the noise.
          </p>
          <p>
            Whether you’re building a long-term portfolio or actively managing
            positions, Harvey Trading is built to keep you informed and in
            control.
          </p>
        </div>

        <div className="col-12 col-lg-6 p-5">
          <p>
            We also invest in financial education—because the best edge is
            understanding. From beginner guides to advanced insights, we help
            you learn the “why” behind every move.
          </p>

          <p>
            <a href="/about" style={{ textDecoration: "none" }}>
              Meet our CEO, Harvey Specter
            </a>
            , and the leadership team behind a platform that values precision,
            integrity, and results.
          </p>

          <p>
            We’re always shipping improvements. Follow our updates, product
            releases, and market commentary—and see how we’re building the next
            generation of investing in the USA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
