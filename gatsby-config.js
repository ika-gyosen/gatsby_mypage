require("dotenv").config();

module.exports = {
  plugins: [
    // helmet
    `gatsby-plugin-react-helmet`,
    // Contentful settings
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
  siteMetadata: {
    title: "札幌情報デスク",
    description: "エレクトロスフィア道中",
    author: "@dlsakai",
  },
};
