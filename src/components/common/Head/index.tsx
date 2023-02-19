import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Head = () => {
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={require('/static/images/favicon.png')}
      />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Anton&display=swap"
        rel="stylesheet"
      />
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <script async defer src="https://www.googletagmanager.com/gtag/js?id=G-LNZQGS8EKR" />
          <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LNZQGS8EKR');
          </script>
          `,
        }}
      />
    </>
  )
}

export default Head
