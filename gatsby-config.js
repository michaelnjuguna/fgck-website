/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */

module.exports = {
  siteMetadata: {
    title: `FGCK Machakos Branch`,
    // TODO: Update this to your site's URL
    siteUrl: `http://localhost:8000/`,
    description: `Full gospel churches of Kenya, Machakos branch`,
    keywords: `Full gospel churches of Kenya, Machakos branch`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.jpg",
      },
    },
    `gatsby-plugin-sass`,
  ],
};
