/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/styles/globals.scss';

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
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Anton&display=swap" rel="stylesheet" /> 
      <Header />
      <main
        style={{
          position: 'relative',
          zIndex: '1'
        }}
      >
        {children}
      </main>

      <footer
        style={{
          marginTop: `2rem`
        }}
      >
        Copyright© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://github.com/yudi7ll'">Yudi</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
