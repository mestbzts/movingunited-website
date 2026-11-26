import { useEffect } from "react";

const SCRIPT_SRC = "https://elfsightcdn.com/platform.js";

// Elfsight reviews widget. Its content and settings are managed in the Elfsight dashboard.
const ElfsightReviews = () => {
  useEffect(() => {
    // Load Elfsight's script once; it also picks up the widget after page changes.
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="elfsight-app-47e19cbe-b50b-40c4-a69f-0c41bc99a677 mb-8" data-elfsight-app-lazy />
  );
};

export default ElfsightReviews;
