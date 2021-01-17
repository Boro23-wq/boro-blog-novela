module.exports = {
  siteMetadata: {
    title: `Blog | Boro`,
    image: `https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80`,
    name: `Boro`,
    siteUrl: `https://boro-blog.netlify.app`,
    description: `Technical blog on Full-stack technologies, development, and best practices in general.`,
    hero: {
      heading: `I write about technology, development and best practices.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/Boro23-wq`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/sintu-boro-5a5aa415b/`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/x.middlechild/`,
      },
    ],
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog by Boro`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
