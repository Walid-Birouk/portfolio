/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/portfolio", // Correctly placed inside the module.exports
  siteMetadata: {
    title: "PORTFOLIO",
    author: "Walid Birouk",
    initials: "W.B.",
    description: "AI Bachelor's portfolio",
    copyright: "- Walid Birouk All rights reserved.",
    contact: "uki.walid@live.fr",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-transformer-remark",
    "gatsby-plugin-postcss",
    `gatsby-plugin-fontawesome`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
