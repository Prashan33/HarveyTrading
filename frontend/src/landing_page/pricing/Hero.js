import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat $5 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing cards */}
      <div className="row p-5 mt-5 text-center">
        
        {/* $0 Equity */}
        <div className="col-12 col-md-4 p-4">
          <div
            className="d-flex justify-content-center align-items-center mx-auto mb-3"
            style={{ height: 300 }}
          >
            <img
              src="media/images/$0.png"
              alt="$0 pricing"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NYSE, NASDAQ) are absolutely free —
            $0 brokerage.
          </p>
        </div>

        {/* $5 Intraday */}
        <div className="col-12 col-md-4 p-4">
          <div
            className="d-flex justify-content-center align-items-center mx-auto mb-3"
            style={{ height: 300 }}
          >
            <img
              src="media/images/$5.png"
              alt="$5 pricing"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat $5 or 0.03% (whichever is lower) per executed order on intraday
            trades across equity, options, and futures.
          </p>
        </div>

        {/* $0 Mutual Funds */}
        <div className="col-12 col-md-4 p-4">
          <div
            className="d-flex justify-content-center align-items-center mx-auto mb-3"
            style={{ height: 300 }}
          >
            <img
              src="media/images/$0.png"
              alt="Free MF"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — $0
            commissions & no hidden charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
