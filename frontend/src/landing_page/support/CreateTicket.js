import React from "react";

function CreateTicket() {
  const topics = [
    {
      title: "Account opening",
      links: [
        "Online account opening",
        "Offline account opening",
        "Business / Partnership accounts",
        "Document upload & verification",
        "International account setup",
        "Pricing & account charges",
      ],
    },
    {
      title: "Your Harvey account",
      links: [
        "Login & security",
        "Profile & KYC updates",
        "Account statements",
        "Tax documents (1099 / forms)",
        "Bank linking",
        "Nominee / beneficiary",
      ],
    },
    {
      title: "Trading & markets",
      links: [
        "Placing an order",
        "Order rejected — why?",
        "After-market orders",
        "Trading hours",
        "Watchlists",
        "Market data delays",
      ],
    },
    {
      title: "Funds & transfers",
      links: [
        "Deposits",
        "Withdrawals",
        "Pending transfers",
        "Payment methods",
        "Failed transactions",
        "Transfer limits",
      ],
    },
    {
      title: "Investments",
      links: [
        "Stocks & ETFs",
        "Options trading",
        "Futures",
        "Mutual funds",
        "Dividend payments",
        "Corporate actions",
      ],
    },
    {
      title: "Reports & support",
      links: [
        "Report an issue",
        "Download statements",
        "Contract notes",
        "Platform status",
        "Raise a ticket",
        "Contact support",
      ],
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="fw-semibold mb-4">
        To create a ticket, select a relevant topic
      </h2>

      <div className="row g-4">
        {topics.map((t, idx) => (
          <div key={idx} className="col-12 col-md-4">
            <div className="p-4">
              <h5 className="fw-semibold mb-3">
                <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
                {t.title}
              </h5>

              {t.links.map((l, i) => (
                <div key={i} className="mb-2">
                  <a href="#" style={{ textDecoration: "none" }}>
                    {l}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
