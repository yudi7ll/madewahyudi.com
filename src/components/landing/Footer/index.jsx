import React from 'react';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center text-white py-4">
          <small className="text__xs">
            <span>&copy; Copyright </span>
            <span>{(new Date()).getFullYear()}</span>
            <a href="https://github.com/yudi7ll" target="_blank" rel="noreferrer"> Yudi</a>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
