const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const express = require("express");

const router = express.Router();

router.get("/sitemap.xml", async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://www.example.com", // Sitenizin URL'si
    });

    // // Dinamik olarak sayfa URL'lerini ekleyin
    // smStream.write({ url: "/page1" });
    // smStream.write({ url: "/page2" });
    // // ...

    smStream.write({ URL: "/" });
    smStream.write({ URL: "/articles" });

    // const articles = await g

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
