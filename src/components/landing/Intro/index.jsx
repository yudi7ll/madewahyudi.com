import React from "react"
import { Sosmed } from 'components/common';
import "./styles.scss"

// styled components
import { Bio, Heading1, Wrapper } from "./styles"

function Intro() {
  return (
    <Wrapper className="intro" id="home">
      <div className="container">
        <Heading1>Hello!, I'm Yudi</Heading1>
        <Bio>
          I’m a Web Developer from Bali Indonesia. Here I’ll make a website for
          you whether if it’s a Company Profile, Personal Website, Blog, Online
          Store etc.
        </Bio>
        <div className="intro__sosmed mt-4">
          <Sosmed />
        </div>
      </div>
    </Wrapper>
  )
}

export default Intro
