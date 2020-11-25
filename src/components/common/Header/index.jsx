import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useEffect } from "react"
import toSlugCase from "to-slug-case"
import toTitleCase from "to-title-case"

import "./styles.scss";

function Header() {
  const nav = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.current.classList.add('navbar-light', 'bg-light');
        nav.current.classList.remove('mt-5', 'navbar-dark')
      } else {
        nav.current.classList.remove('bg-light', 'navbar-light');
        nav.current.classList.add('mt-5', 'navbar-dark');
      }
    }
  }, []);

  const MenuLink = to => (
    <li className="nav-item mx-3" key={to}>
      <a className="navbar__link nav-link font-weight-bold text-uppercase" href={'#' + to}>{to}</a>
    </li>
  );

  return (
    <nav
      class="navbar navbar-expand-md navbar-dark fixed-top mt-5"
      ref={nav}
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
          { ['home', 'about', 'resume', 'portfolio', 'contact'].map(MenuLink) }
        </ul>
      </div>
    </nav>
  );
}

export default Header
