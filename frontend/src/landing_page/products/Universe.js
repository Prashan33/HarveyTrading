import React from "react";

function Universe() {
  const items = [
    {
      img: "media/images/trust.png",
      alt: "Harvey Fund House",
      title: "Harvey Fund House",
      desc:
        "Our asset management venture that creates simple and transparent index funds to help you save for your goals.",
      // This logo has lots of empty space → give it bigger size directly
      logoStyle: { height: 60, width: 240 },
    },
    {
      img: "media/images/sensibullLogo.svg",
      alt: "Sensibull",
      title: "SENSIBULL",
      desc:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest and more.",
      logoStyle: { height: 52, width: 240 },
    },
    {
      img: "media/images/tijori.svg",
      alt: "Tijori",
      title: "TIJORI",
      desc:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
      logoStyle: { height: 52, width: 240 },
    },
    {
      img: "media/images/streakLogo.png",
      alt: "Streak",
      title: "Streak",
      desc:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
      logoStyle: { height: 60, width: 240 },
    },
    {
      img: "media/images/smallcaseLogo.png",
      alt: "smallcase",
      title: "smallcase",
      desc:
        "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
      logoStyle: { height: 60, width: 240 },
    },
    {
      img: "media/images/dittoLogo.png",
      alt: "ditto",
      title: "ditto",
      desc:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
      logoStyle: { height: 60, width: 240 },
    },
  ];

  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="row text-center">
        <h1 className="fw-semibold">The Harvey Universe</h1>
        <p className="text-muted mt-2" style={{ fontSize: "1.05rem" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Grid */}
      <div className="row mt-5">
        {items.map((it, idx) => (
          <div key={idx} className="col-12 col-md-4 text-center px-4 py-5">
            {/* FIXED LOGO BOX */}
            <div
              className="d-flex align-items-center justify-content-center mx-auto"
              style={{
                height: 90,     // fixed box height for all
                width: 280,     // fixed box width for all
                overflow: "hidden", // ✅ prevents logo from covering title
              }}
            >
              <img
                src={it.img}
                alt={it.alt}
                style={{
                  ...it.logoStyle, // ✅ per-logo sizing (no scaling)
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            {/* Title */}
            <div
              className="mt-3 fw-semibold"
              style={{
                letterSpacing: "0.08em",
                fontSize: "0.95rem",
                overflow: "visible",
                whiteSpace: "normal",
              }}
            >
              {it.title}
            </div>

            {/* Description */}
            <p
              className="text-muted mt-2 mb-0"
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.6,
                minHeight: 80,
              }}
            >
              {it.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-4 mb-5">
        <button className="btn btn-primary px-5 py-2 fs-5">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
