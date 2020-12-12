import React from 'react';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center text-white py-4">
          <small>
            <span>&copy; Copyright {(new Date()).getFullYear()}</span>
            <span>. Created by <a href="https://github.com/yudi7ll" target="_blank" rel="noreferrer">Yudi</a></span>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
