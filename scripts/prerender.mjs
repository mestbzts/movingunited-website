// Writes one HTML file per page into dist/, plus 404.html and sitemap.xml.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { render, pages, notFoundMeta, SITE_URL } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const seoBlock = /<!--seo-start-->[\s\S]*?<!--seo-end-->/;
const rootDiv = '<div id="root"></div>';

if (!seoBlock.test(template) || !template.includes(rootDiv)) {
  throw new Error("index.html is missing the SEO markers or the root element");
}

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const head = (meta) => {
  const url = SITE_URL + meta.path;
  const title = esc(meta.title);
  const description = esc(meta.description);
  return `<!--seo-start-->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${meta.noindex ? "noindex" : "index, follow"}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <!--seo-end-->`;
};

const write = (file, meta, url) => {
  const body = render(url);
  for (const [, asset] of body.matchAll(/["'(](\/assets\/[^"')\s]+)/g)) {
    if (!fs.existsSync(path.join(dist, asset))) throw new Error(`Missing asset ${asset} on ${url}`);
  }
  const html = template
    .replace(seoBlock, () => head(meta))
    .replace(rootDiv, () => `<div id="root">${body}</div>`);
  const target = path.join(dist, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
  console.log(`pre-rendered ${url} -> ${file}`);
};

for (const meta of pages) {
  write(meta.path === "/" ? "index.html" : `${meta.path.slice(1)}.html`, meta, meta.path);
}
write("404.html", notFoundMeta, notFoundMeta.path);

const urls = pages
  .filter((p) => !p.noindex)
  .map((p) => `  <url><loc>${SITE_URL}${p.path}</loc></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
