import { Link } from "gatsby"
import React from "react"
import "./styles.scss"

// styled components
import { Bio, Heading1, Wrapper } from "./styles"

// icons
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "components/icons"

function Sosmed({ Icon, to }) {
  return (
    <Link
      className="mx-2"
      target="_blank"
      to={to}
      style={{
        display: "inline-block",
        marginRight: ".8em",
      }}
    >
      <Icon fill="#fff" height="40px" width="40px" />
    </Link>
  )
}

function Intro() {
  return (
    <Wrapper className="intro">
      <div className="container">
        <Heading1>Hello!, I'm Yudi</Heading1>
        <Bio>
          I’m a Web Developer from Bali Indonesia. Here I’ll make a website for
          you whether if it’s a Company Profile, Personal Website, Blog, Online
          Store etc.
        </Bio>
        <div className="intro__sosmed mt-4">
          <Sosmed to="https://wa.me/628819140763" Icon={WhatsappIcon} />
          <Sosmed to="https://github.com/yudi7ll" Icon={GithubIcon} />
          <Sosmed to="https://instagram.com/yudi_ll" Icon={InstagramIcon} />
          <Sosmed to="https://twitter.com/yudi7ll" Icon={TwitterIcon} />
          <Sosmed to="https://facebook.com/yudi1ll" Icon={FacebookIcon} />
        </div>
      </div>
    </Wrapper>
  )
}

export default Intro
