import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useEffect } from "react"
import toSlugCase from "to-slug-case"
import toTitleCase from "to-title-case"

import "./styles.scss";

function MenuLink({ to }) {
  return (
    <Link
      to={toSlugCase(to)}
      style={{
        color: "white",
        fontSize: ".9em",
        fontWeight: "bold",
        margin: "0 1.5rem",
        textDecoration: "none",
        textTransform: "uppercase",
      }}
    >
      {toTitleCase(to)}
    </Link>
  )
}

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

  return (
    <nav
      class="navbar navbar-expand-md navbar-dark fixed-top mt-5"
      ref={nav}
    >
      <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#header" aria-controls="header" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="header">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-3">
            <a class="nav-link font-weight-bold" href="#">HOME</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link font-weight-bold" href="#">ABOUT</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link font-weight-bold" href="#">RESUME</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link font-weight-bold" href="#">PORTFOLIO</a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link font-weight-bold" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header
