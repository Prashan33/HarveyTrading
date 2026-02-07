import React from "react";
import "./Awards.css";

function Awards() {
  return (
    <section className="awards-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <img
              src="media/images/largestBroker.svg"
              alt="Largest Broker"
              className="img-fluid"
            />
          </div>

          <div className="col-6">
            <h1>Largest stock broker in USA</h1>
            <p>
              2+ million Harvey clients contribute to over 15% of all retail order
              volumes in USA daily by trading and investing in:
            </p>

            <div className="row">
              <div className="col-6">
                <ul>
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
              </div>

              <div className="col-6">
                <ul>
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
