import React from "react";

const BackToTopButton = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-8 right-8 z-50 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-secondary transition"
    aria-label="Back to Top"
  >
    ↑ Back to Top
  </button>
);

export default BackToTopButton;
