/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import './styles.css';

// Common Components
import { Header, Container } from "components/common";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" /> 
      <Header />
      <Container>
        <main>{children}</main>

        <footer
          style={{
            marginTop: `2rem`
          }}
        >
          Copyright© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://github.com/yudi7ll'">Yudi</a>
        </footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
