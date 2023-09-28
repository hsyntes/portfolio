const fetchData = require("./utils/fetchData");

module.exports = {
  siteUrl: "https://hsyntes.com",
  generateRobotsTxt: true,
  exclude: [],
  changefreq: "daily",
  priority: 0.7,
  async generateDynamicRoutes() {
    const dynamicRoutes = [];

    try {
      const projectsResponse = await fetchData("projects");
      const articlesReponse = await fetchData("articles");

      const { projects } = projectsResponse.data;
      const { articles } = articlesReponse.data;

      projects.forEach((project) =>
        dynamicRoutes.push(`/projects/${project._id}`)
      );

      articles.forEach((article) =>
        dynamicRoutes.push(`/articles/${article._id}`)
      );
    } catch (e) {
      console.error("Error fetching the data: ", e);
    }
  },
};
