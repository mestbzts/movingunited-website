import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = "AW-17856665174";

const insertScript = (src: string, id?: string) => {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  if (id) s.id = id;
  document.head.appendChild(s);
};

const insertInlineScript = (content: string, id: string) => {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  s.innerHTML = content;
  document.head.appendChild(s);
};

const initGtag = () => {
  // ensure dataLayer exists
  window.dataLayer = window.dataLayer || [];
  // define gtag if missing
  if (!window.gtag) {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      (window.dataLayer as unknown[]).push(arguments);
    } as unknown as (...args: unknown[]) => void;
  }
  // run initial config
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
};

const GoogleTag = () => {
  const location = useLocation();

  useEffect(() => {
    // Add external gtag script
    insertScript("https://www.googletagmanager.com/gtag/js?id=" + GA_ID, "gtag-js");

    // Add inline initialization script (only once)
    const inline = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    insertInlineScript(inline, "gtag-init");

    // Make sure window.gtag is available for immediate calls
    initGtag();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // send page_view on route change
    if (typeof window.gtag === "function") {
      try {
        window.gtag("event", "page_view", {
          page_path: location.pathname + location.search,
        });
      } catch {
        /* ignore gtag errors */
      }
    }
  }, [location]);

  return null;
};

export default GoogleTag;
