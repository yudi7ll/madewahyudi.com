import React from 'react';
import { Sosmed } from 'components/common';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer pt-5 pb-3">
      <div className="container">
        <div className="text-center text-white">
          <Sosmed />
          <div className="mt-5">
            <small>
              <span>&copy; Copyright {(new Date()).getFullYear()}</span>
              <span>. Creator <a href="https://github.com/yudi7ll" target="_blank" rel="noreferrer">Yudi</a></span>
              </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
