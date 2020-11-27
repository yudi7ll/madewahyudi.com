import PropTypes from "prop-types"
import React from "react"

const Layout = ({ children }) => {

  return (
    <>
      {/* fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        async 
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Anton&display=swap"
        rel="stylesheet"
      />
        <main style={{ position: 'relative', zIndex: 1 }}>{children}</main>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
