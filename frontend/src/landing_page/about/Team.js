import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-12 col-lg-6 p-3 text-center">
          <img
            src="media/images/HarveySpecter.jpg"
            alt="Harvey Specter"
            style={{ borderRadius: "100%", width: "80%" }}
          />
          <h4 className="mt-5">Harvey Specter</h4>
          <h6>Founder & CEO</h6>
        </div>

        <div className="col-12 col-lg-6 p-3">
          <p>
            Harvey founded Harvey Trading to bring institutional-grade tools to
            everyday investors across the United States—without the hidden fees,
            confusing platforms, or slow support.
          </p>
          <p>
            Known for high standards and straight talk, he built the company
            around three principles: precision execution, transparent pricing,
            and a client-first experience.
          </p>
          <p>
            When he’s not focused on product and strategy, you’ll find him
            staying sharp in the gym, mentoring future leaders, or breaking down
            markets like a closing argument.
          </p>

          <p>
            Connect on{" "}
            <a href="/" onClick={(e) => e.preventDefault()}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" onClick={(e) => e.preventDefault()}>
              Community
            </a>{" "}
            /{" "}
            <a href="/" onClick={(e) => e.preventDefault()}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
