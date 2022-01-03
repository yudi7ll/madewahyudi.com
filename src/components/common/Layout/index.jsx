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
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
