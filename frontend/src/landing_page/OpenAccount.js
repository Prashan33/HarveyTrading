import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 text-center">
     

      <h1 className="mb-3">Invest in everything</h1>

      <p className="text-muted fs-5">
        A modern investing platform for the US stock market.
        Trade stocks, ETFs, options, and mutual funds with transparent pricing,
        powerful tools, and no hidden fees.
      </p>

      <button
        className="btn btn-primary btn-lg mt-3"
        style={{ width: "220px" }}
      >
        Open an account
      </button>
    </div>
  );
}

export default OpenAccount;
