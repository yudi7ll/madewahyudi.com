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
    <li
      className={['nav-item mx-3', to == 'yudi' && 'd-none d-md-block'].join(' ')}
      key={to}
    >
        <Link
          className="navbar__link nav-link font-weight-bold text-uppercase"
          activeClass={'navbar--active'}
          to={to}
          spy={true}
          smooth={true}
        >
          <a>{to}</a>
        </Link>
    </li>
  );

  const BasicMenu = props => (
    <nav
      className={[
        "navbar navbar-expand-md navbar-dark fixed-top",
        shrink ? "navbar__shrink bg-blue" : "pt-md-4"
      ].join(' ')}
      {...props}
    >
      <Link className="navbar-brand d-md-none">
        <h4 className="m-0 color--accent">YUDI</h4>
      </Link>
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
