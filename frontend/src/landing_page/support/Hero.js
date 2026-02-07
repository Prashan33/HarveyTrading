import React from "react";

function Hero() {
  return (
    <section className="container-fluid p-0" style={{ background: "#387ed1" }}>
      <div className="container text-white py-4">
        {/* top row */}
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="m-0 fw-semibold">Support Portal</h5>
          <a href="#" className="text-white text-decoration-underline">
            Track tickets
          </a>
        </div>

        {/* main row */}
        <div className="row mt-4 pb-5">
          {/* left */}
          <div className="col-12 col-md-7 mt-4">
            <h2 className="fw-semibold" style={{ fontSize: "1.6rem" }}>
              Search for an answer or browse help topics to create a ticket
            </h2>

            <input
              className="form-control mt-3"
              placeholder="Eg: how do I activate options, why is my order rejected..."
              style={{
                borderRadius: "4px",
                height: "48px",
                border: "none",
              }}
            />

            <div className="mt-3 d-flex flex-wrap gap-3">
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Platform user manual
              </a>
            </div>
          </div>

          {/* right */}
          <div className="col-12 col-md-5 mt-4">
            <h5 className="fw-semibold">Featured</h5>
            <ol className="mt-3">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-underline">
                  Current takeovers and delistings — January 2026
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Latest intraday leverage updates — Margin & Risk
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
