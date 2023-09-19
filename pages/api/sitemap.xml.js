const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const express = require("express");
const { default: fetchData } = require("@/utils/fetchData");

const router = express.Router();

router.get("/sitemap.xml", async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://www.hsyntes.com/",
    });

    smStream.write({ URL: "/" });
    smStream.write({ URL: "/projects" });
    smStream.write({ URL: "/articles" });

    const projectsData = await fetchData("projects");
    projectsData.projects.forEach((project) =>
      smStream.write({ URL: `/projects/${project._id}` })
    );

    const articlesData = await fetchData("articles");
    articlesData.articles.forEach((article) =>
      smStream.write({ URL: `/articles/${article._id}` })
    );

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
