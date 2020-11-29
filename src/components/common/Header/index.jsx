import React, { useState, useEffect } from "react"

import "./styles.scss";

function Header() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    }
  }, []);

  const MenuLink = to => (
    <li className="nav-item mx-3" key={to}>
      <a
        className="navbar__link nav-link font-weight-bold text-uppercase"
        href={'#' + to}
      >
        {to}
      </a>
    </li>
  );

  const ShrinkMenu = props => (
    <nav className="navbar navbar-expand-md navbar-dark bg-blue fixed-top" {...props}>
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
          { ['home', 'about', 'resume', 'portfolio', 'contact'].map(MenuLink) }
        </ul>
      </div>
    </nav>
  );

  const BasicMenu = props => (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top mt-5" {...props}>
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
          { ['home', 'about', 'resume', 'portfolio', 'contact'].map(MenuLink) }
        </ul>
      </div>
    </nav>
  );

  return (
    <>
      <div className="d-md-none">
        <ShrinkMenu />
      </div>
      <div className="d-none d-md-block">
        {  shrink ? <ShrinkMenu /> : <BasicMenu />  }
      </div>
    </>
  );
}

export default Header
