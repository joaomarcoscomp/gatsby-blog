module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-theme-blog-darkmode`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Noites Guanabara`,
    author: `João Marcos`,
    description: `Ideias em claro!...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
