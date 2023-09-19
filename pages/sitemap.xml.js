const express = require("express");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const { fetchData } = require("@/utils/fetchData");

const app = express();
const router = express.Router();

router.get("/sitemap.xml", async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://www.hsyntes.com/",
    });

    // Static URLs
    smStream.write({ url: "/" });
    smStream.write({ url: "/articles" });

    // Dinamik URLs
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

app.use(router);

const PORT = process.env.NEXT_PUBLIC_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
