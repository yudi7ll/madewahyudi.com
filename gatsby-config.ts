import type { GatsbyConfig } from 'gatsby'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'I Made Wahyudi',
    description:
      "I'm a web developer specialized in both Front-end and Back-end.",
    siteUrl: 'https://madewahyudi.com',
    author: 'Yudi',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/images/favicon.png',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: 'static/',
      },
      __key: 'static',
    },
  ],
}

export default config
