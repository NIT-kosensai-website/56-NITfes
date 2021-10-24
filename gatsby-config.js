module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "56-NITfes",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    //tailwindcss関連のプラグイン
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
