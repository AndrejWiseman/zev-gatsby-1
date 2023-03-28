/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sass`,



    {
     resolve: `gatsby-source-contentful`,
     options: {
       spaceId: `5y908004c0m1`,
       // Learn about environment variables: https://gatsby.dev/env-vars
       // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
       accessToken: process.env.API_KEY,
       // apiKey: process.env.API_KEY,
     },
   },


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/`,
      },
    },

  ],
}
