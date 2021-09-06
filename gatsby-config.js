/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects_data`,
      },
    },
  ],
  siteMetadata: {
    title: "PetriD Warrior",
    description: "My portfolio",
    copywrite: "Copywrite 2021",
    email: "dimtri.williams.6448@gmail.com",
    gitHub: "https://github.com/PetriDamous",
  },
}
