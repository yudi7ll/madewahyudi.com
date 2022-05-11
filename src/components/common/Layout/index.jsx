import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

const Layout = ({ children }) => (
  <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Anton&display=swap"
      rel="stylesheet"
    />
    {/* eslint-disable-next-line react/no-danger */ }
    <div dangerouslySetInnerHTML={ {
      __html: `
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-LNZQGS8EKR"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LNZQGS8EKR');
          </script>
        `,
    } }
    />
    <main>
      <>
        { children }
        {
          Array.from(Array(10)).map(() => {
            <div className="circle-container">
              <div className="circle" />
            </div>
          })
        }
      </>
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
