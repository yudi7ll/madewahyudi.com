const sass = require('sass');

module.exports = {
  siteMetadata: {
    title: 'Yudi',
    description: 'Web Developer',
    author: '@yudi7ll',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: sass,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Web Developer',
        short_name: 'Yudi',
        start_url: '/',
        background_color: '#011627',
        theme_color: '#011627',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/*'],
        workboxConfig: {
          importWorkboxFrom: 'local',
        },
        runtimeCaching: [
          {
            // Use cacheFirst since these don't need to be revalidated (same RegExp
            // and same reason as above)
            urlPattern: /(\.js$|\.css$|static\/)/,
            handler: 'CacheFirst',
          },
          {
            // page-data.json files, static query results and app-data.json
            // are not content hashed
            urlPattern: /^https?:.*\/page-data\/.*\.json/,
            handler: 'StaleWhileRevalidate',
          },
          {
            // Add runtime caching of various other page resources
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: 'StaleWhileRevalidate',
          },
          {
            // Google Fonts CSS (doesn't end in .css so we need to specify it)
            urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
            handler: 'StaleWhileRevalidate',
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', 'public'],
      },
    },
  ],
};
