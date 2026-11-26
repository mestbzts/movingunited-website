// Used only at build time to turn each page into static HTML.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppContent } from "./App";

export { SITE_URL, pages, notFoundMeta } from "./seo";

export const render = (url: string) =>
  renderToString(
    <AppContent
      router={(children) => <StaticRouter location={url}>{children}</StaticRouter>}
    />
  );
