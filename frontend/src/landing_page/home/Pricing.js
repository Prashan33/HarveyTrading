import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-4">
          <h1 className="mb-3 fs-2">Simple, transparent pricing</h1>
          <p>
            We offer straightforward pricing built for US investors.
            No hidden fees, no commissions on stocks and ETFs, and simple
            flat pricing for active trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            View full pricing →
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-3">$0</h1>
              <p>
                Commission-free trading on
                <br />
                US stocks and ETFs
              </p>
            </div>

            <div className="col p-3 border">
              <h1 className="mb-3">$0.65</h1>
              <p>
                Options contracts
                <br />
                per contract
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
