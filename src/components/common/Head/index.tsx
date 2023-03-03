import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title: propsTitle }: { title?: string }) => {
  const {
    site: {
      siteMetadata: { description, author, title: siteTitle },
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

  const title = propsTitle || siteTitle

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
