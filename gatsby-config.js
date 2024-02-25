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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Site`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon/android-chrome-512x512.png`,

        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          // If you want to manually specify additional icons, you can do so here.
        ],
        include_favicon: true,
      },
    },
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
