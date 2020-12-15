import { Link } from 'react-scroll';
import React, { useState, useEffect } from "react"

import "./styles.scss";

function Header() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    }
  }, []);

  const MenuLink = to => (
    <li className="nav-item mx-3" key={to}>
      <a className="navbar__link nav-link font-weight-bold text-uppercase">
        <Link activeClass={'navbar--active'} to={to} spy={true} smooth={true}>{to}</Link>
      </a>
    </li>
  );

  const BasicMenu = props => (
    <nav
      className={[
        "navbar navbar-expand-md navbar-dark fixed-top",
        shrink
          ? "navbar__shrink bg-blue"
          : "pt-md-4"
      ].join(' ')}
      {...props}
    >
      <button
        className="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#header"
        aria-controls="header"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="header">
        <ul className="navbar-nav mx-auto">
          { ['yudi', 'portfolio', 'tools', 'contact'].map(MenuLink) }
        </ul>
      </div>
    </nav>
  );

  return (
    <BasicMenu />
  );
}

export default Header
