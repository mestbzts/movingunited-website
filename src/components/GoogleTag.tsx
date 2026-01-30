import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = "AW-17856665174";
const GTM_ID = "GTM-MDRJF98G";

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

const insertGtmInline = (id: string) => {
  if (document.getElementById("gtm-inline")) return;
  const inline = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`;
  insertInlineScript(inline, "gtm-inline");
};

const insertGtmNoScript = (id: string) => {
  // if an existing noscript with data-gtm present, skip
  if (document.getElementById("gtm-noscript")) return;
  const nos = document.createElement("noscript");
  nos.id = "gtm-noscript";
  nos.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  // insert as first child of body
  if (document.body.firstChild) {
    document.body.insertBefore(nos, document.body.firstChild);
  } else {
    document.body.appendChild(nos);
  }
};

const initGtag = () => {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      (window.dataLayer as unknown[]).push(arguments);
    } as unknown as (...args: unknown[]) => void;
  }
  // run initial config for gtag
  try {
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  } catch {
    /* ignore */
  }
};

const GoogleTag = () => {
  const location = useLocation();

  useEffect(() => {
    // --- GTAG (existing) ---
    insertScript("https://www.googletagmanager.com/gtag/js?id=" + GA_ID, "gtag-js");
    const inlineGtag = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    insertInlineScript(inlineGtag, "gtag-init");
    initGtag();

    // --- GTM (new) ---
    insertGtmInline(GTM_ID);
    // Insert noscript iframe immediately after <body> opening
    insertGtmNoScript(GTM_ID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // send page_view on route change for gtag
    if (typeof window.gtag === "function") {
      try {
        window.gtag("event", "page_view", {
          page_path: location.pathname + location.search,
        });
      } catch {
        /* ignore gtag errors */
      }
    }
    // also push a dataLayer event for GTM
    try {
      window.dataLayer = window.dataLayer || [];
      (window.dataLayer as unknown[]).push({
        event: "page_view",
        page_path: location.pathname + location.search,
      });
    } catch {
      /* ignore */
    }
  }, [location]);

  return null;
};

export default GoogleTag;
