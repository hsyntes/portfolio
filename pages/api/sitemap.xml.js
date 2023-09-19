const express = require("express");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const { fetchData } = require("@/utils/fetchData");

const router = express.Router();

router.get("/sitemap.xml", async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://www.hsyntes.com/",
    });

    // Add static URLs
    smStream.write({ url: "/" });
    smStream.write({ url: "/articles" });

    // Fetch and add dynamic URLs
    const projectsData = await fetchData("projects");
    projectsData.projects.forEach((project) => {
      smStream.write({ url: `/projects/${project._id}` });
    });

    const articlesData = await fetchData("articles");
    articlesData.articles.forEach((article) => {
      smStream.write({ url: `/articles/${article._id}` });
    });

    smStream.end();

    const sitemap = await streamToPromise(Readable.from([smStream]));

    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

module.exports = router;
