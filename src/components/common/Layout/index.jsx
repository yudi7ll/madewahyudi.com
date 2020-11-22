/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Common Components
import { Header } from "components/common"

const Layout = ({ children }) => {
  /*
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  */

  return (
    <>
      {/* CSS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />

      {/* jQuery and JS bundle w/ Popper.js */}
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

      {/* fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Anton&display=swap"
        rel="stylesheet"
      />
      <Header />
      <main
        style={{
          position: "relative",
          zIndex: "1",
        }}
      >
        {children}
      </main>

      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        Copyright© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://github.com/yudi7ll" target="_blank">Yudi</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
