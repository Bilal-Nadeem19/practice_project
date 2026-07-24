import fs from "fs";

const industries = JSON.parse(
  fs.readFileSync("./src/data/pages/industries.json", "utf8")
);

const BASE_URL = "https://virtual-assistant-pearl.vercel.app";

const staticRoutes = [
  "",
  "/about",
  "/blogs",
  "/contact",
  "/faqs",
  "/pricing",
];

const featureRoutes = [
  "/features/ai-receptionist",
  "/features/ai-appointment-scheduling",
  "/features/online-integration",
  "/features/post-session-tools",
  "/features/smart-assistant",
  "/features/advance-dashboard",
];

const industryRoutes = industries.industrySections.flatMap((section) =>
  section.industries.map((industry) => industry.link)
);

const routes = [
  ...staticRoutes,
  ...featureRoutes,
  ...industryRoutes,
];

// SEO settings for different page types
function getSeoData(route) {
  if (route === "") {
    return {
      priority: "1.0",
      changefreq: "daily",
    };
  }

  if (route.startsWith("/features")) {
    return {
      priority: "0.9",
      changefreq: "weekly",
    };
  }

  if (route.startsWith("/industries")) {
    return {
      priority: "0.8",
      changefreq: "weekly",
    };
  }

  return {
    priority: "0.7",
    changefreq: "monthly",
  };
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const seo = getSeoData(route);

    return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${seo.changefreq}</changefreq>
    <priority>${seo.priority}</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);

console.log("✅ Sitemap generated successfully!");