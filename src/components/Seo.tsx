import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, getPageMeta } from "@/seo";

const setAttr = (selector: string, attr: string, value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value);
};

// Keeps the head tags correct when visitors move between pages.
const Seo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const url = SITE_URL + meta.path;

    document.title = meta.title;
    setAttr('meta[name="description"]', "content", meta.description);
    setAttr('meta[name="robots"]', "content", meta.noindex ? "noindex" : "index, follow");
    setAttr('link[rel="canonical"]', "href", url);
    setAttr('meta[property="og:title"]', "content", meta.title);
    setAttr('meta[property="og:description"]', "content", meta.description);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('meta[name="twitter:title"]', "content", meta.title);
    setAttr('meta[name="twitter:description"]', "content", meta.description);
  }, [pathname]);

  return null;
};

export default Seo;
