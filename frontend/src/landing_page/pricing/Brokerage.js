import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        
        {/* Left section */}
        <div className="col-12 col-md-8 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>

          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted mt-3"
          >
            <li>
              Assisted trades placed via phone support may incur an additional
              fee of <strong>$25 + applicable taxes</strong> per order.
            </li>
            <li>
              Digital trade confirmations and account statements are sent via
              registered email at no extra cost.
            </li>
            <li>
              Paper statements or trade confirmations, if requested, may be
              charged <strong>$10 per document</strong> plus mailing costs.
            </li>
            <li>
              For international (non-US resident) accounts, equity trades may
              incur a brokerage of <strong>0.5% or $50 per order</strong>,
              whichever is lower.
            </li>
            <li>
              Options and futures trades are subject to exchange, clearing, and
              regulatory fees as mandated by US exchanges.
            </li>
            <li>
              If an account maintains a negative balance, a higher brokerage fee
              may apply until the balance is cleared.
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className="col-12 col-md-4 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>

          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            View a detailed breakdown of brokerage, exchange fees, regulatory
            charges, and other applicable costs across equities, options, and
            futures trading.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Brokerage;
