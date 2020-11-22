import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import toSlugCase from "to-slug-case"
import toTitleCase from "to-title-case"

import { Brand, HeaderWrapper, Menu, Wrapper } from "./styles"

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
  return (
    <Wrapper>
      <HeaderWrapper>
        <MenuLink to="home" />
        <MenuLink to="about" />
        <MenuLink to="resume" />
        <MenuLink to="portfolio" />
        <MenuLink to="contact" />
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Header
