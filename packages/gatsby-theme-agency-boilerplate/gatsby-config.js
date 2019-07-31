module.exports = options => {
  const { contentPath = `src/pages` } = options;

  return {
    siteMetadata: {
      title: `Gatsby Default Starter`,
      description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
      author: `@gatsbyjs`,
    },
    plugins: [
      `gatsby-transformer-yaml-pages`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath,
        },
      },
    ],
  }
}
