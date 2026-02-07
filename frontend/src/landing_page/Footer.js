import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top border-top">
          <div className="row gy-4">
            {/* Logo + copyright + socials */}
            <div className="col-lg-3 col-md-6">
              <img
                src="media/images/logo.png"
                alt="Harvey's Trading"
                className="footer-logo"
              />
              <p className="footer-copy">
                © 2015 - 2026, Harvey's Trading, Inc. <br />
                All rights reserved.
              </p>

              <div className="footer-social">
                <a href="#" aria-label="X">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>

              <div className="footer-social mt-2">
                <a href="#" aria-label="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="#" aria-label="Telegram">
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </div>
            </div>

            {/* Account */}
            <div className="col-lg-2 col-md-6">
              <p className="footer-title">Account</p>
              <a className="footer-link" href="#">Open an account</a>
              <a className="footer-link" href="#">Login</a>
              <a className="footer-link" href="#">Funding</a>
              <a className="footer-link" href="#">Withdrawals</a>
              <a className="footer-link" href="#">Referral program</a>
            </div>

            {/* Support */}
            <div className="col-lg-2 col-md-6">
              <p className="footer-title">Support</p>
              <a className="footer-link" href="#">Contact us</a>
              <a className="footer-link" href="#">Help center</a>
              <a className="footer-link" href="#">Support portal</a>
              <a className="footer-link" href="#">Report an issue</a>
              <a className="footer-link" href="#">Downloads</a>
            </div>

            {/* Company */}
            <div className="col-lg-2 col-md-6">
              <p className="footer-title">Company</p>
              <a className="footer-link" href="#">About</a>
              <a className="footer-link" href="#">Philosophy</a>
              <a className="footer-link" href="#">Press & media</a>
              <a className="footer-link" href="#">Careers</a>
              <a className="footer-link" href="#">Blog</a>
              <a className="footer-link" href="#">Open source</a>
            </div>

            {/* Quick links */}
            <div className="col-lg-3 col-md-6">
              <p className="footer-title">Quick links</p>
              <a className="footer-link" href="#">Market news</a>
              <a className="footer-link" href="#">Pricing</a>
              <a className="footer-link" href="#">Trading hours</a>
              <a className="footer-link" href="#">Economic calendar</a>
              <a className="footer-link" href="#">Calculators</a>
              <a className="footer-link" href="#">Sectors</a>
            </div>
          </div>
        </div>

        {/* Legal text area */}
        <div className="footer-legal">
          <p>
            Harvey’s Trading is a project created for educational and portfolio
            purposes. It is not a real broker-dealer and does not provide investment
            advice.
          </p>
          <p>
            Investing involves risk, including the possible loss of principal.
            Past performance does not guarantee future results. Market data shown
            may be delayed and is provided for informational purposes only.
          </p>
          <p>
            This site does not offer personalized recommendations or execute trades
            on behalf of users. Users are solely responsible for any investment
            decisions made using the information on this website.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
