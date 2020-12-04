import React from 'react';
import { Sosmed } from 'components/common';
import { IntroBg } from 'components/icons';
import './styles.scss';

function Intro() {
  return (
    <div id="yudi" className="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 pt-0 pt-lg-5">
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
            <div className="intro__portfolio-btn">
              <button className="btn btn-outline-light rounded-0 mt-4 px-5 py-2">Portfolio</button>
            </div>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <IntroBg />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;
