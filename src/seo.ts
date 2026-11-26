// Page titles and descriptions used by the browser and by the pre-render step.
export const SITE_URL = "https://www.movingunited.ca";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
};

export const pages: PageMeta[] = [
  {
    path: "/",
    title: "Movers in Toronto & the GTA | Moving United",
    description:
      "Residential and commercial movers in Toronto and the GTA, plus staging, furniture assembly and disposal. Get a free quote from Moving United.",
  },
  {
    path: "/about",
    title: "About Our Toronto Moving Company | Moving United",
    description:
      "Learn about Moving United, a moving company serving homes and businesses with moving, staging, furniture assembly and disposal services.",
  },
  {
    path: "/services",
    title: "Moving, Staging & Assembly Services | Moving United",
    description:
      "Residential moving, commercial moving, office relocation, staging, furniture assembly and disposal services in Toronto and the GTA.",
  },
  {
    path: "/projects",
    title: "Recent Moving & Staging Projects | Moving United",
    description:
      "See recent Moving United projects, including home moves, commercial deliveries, venue setups and staging.",
  },
  {
    path: "/blog",
    title: "Moving Tips & Guides | Moving United",
    description:
      "Practical advice on planning, packing, staging and office relocation from Moving United.",
  },
  {
    path: "/blog/0",
    title: "How to Prepare for a Big Move | Moving United",
    description: "Essential steps to plan, declutter and pack for a stress-free move.",
  },
  {
    path: "/blog/1",
    title: "Staging Your Home for Sale | Moving United",
    description: "Tips to make your home irresistible to buyers.",
  },
  {
    path: "/blog/2",
    title: "Commercial Relocation Checklist | Moving United",
    description: "A checklist for a smooth office relocation.",
  },
  {
    path: "/blog/3",
    title: "Packing Guide for Fragile Items | Moving United",
    description: "How to safely pack your fragile belongings.",
  },
  {
    path: "/blog/4",
    title: "Moving Timeline & Checklist | Moving United",
    description: "A step-by-step timeline for planning a stress-free move.",
  },
  {
    path: "/contact",
    title: "Get a Free Moving Quote | Moving United",
    description:
      "Request a free moving quote online or call Moving United at (437) 505-8275.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Moving United",
    description: "How Moving United collects, uses and protects your personal information.",
  },
  {
    path: "/contact-thankyou",
    title: "Thank You | Moving United",
    description: "Your request has been sent to Moving United.",
    noindex: true,
  },
];

export const notFoundMeta: PageMeta = {
  path: "/404",
  title: "Page Not Found | Moving United",
  description: "The page you were looking for could not be found.",
  noindex: true,
};

export const getPageMeta = (pathname: string): PageMeta => {
  const clean = pathname.replace(/\/+$/, "").toLowerCase() || "/";
  return pages.find((p) => p.path === clean) ?? notFoundMeta;
};
