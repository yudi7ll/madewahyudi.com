import PropTypes from "prop-types"
import React from "react"
import './styles.scss';

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
      <main>{children}</main>

      <div dangerouslySetInnerHTML={{
        __html: `
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-LNZQGS8EKR"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LNZQGS8EKR');
          </script>
        `
        }} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
