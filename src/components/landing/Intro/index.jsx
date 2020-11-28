import React from 'react';
import { Sosmed } from 'components/common';
import './styles.scss';

function Intro() {
  return (
    <div id="home" className="intro">
      <div className="container">
        <h1 className="intro__heading1">
          Hi!, I'm <span className="intro--yellow">Yudi</span>
        </h1>
        <p className="intro__description">
          I’m a Web Developer from Bali Indonesia. Here I’ll make a website for
          you whether if it’s a Company Profile, Personal Website, Online
          Store etc.
        </p>
        <div className="intro__sosmed mt-4">
          <Sosmed />
        </div>
      </div>
    </div>
  )
}

export default Intro;
