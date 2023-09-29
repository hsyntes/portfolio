import fs from "fs";

export default async function (req, res) {
  const sitemapPath = "./public/sitemap.xml";
  const sitemap = fs.readFileSync(sitemapPath, "utf-8");

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}
