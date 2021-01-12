import React from 'react';
import { IntroBg } from 'components/svg';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { Sosmed } from 'components/common';
import './styles.scss';

function Intro() {
  return (
    <motion.div
      className="intro"
      id="yudi"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5 pt-0 pt-lg-5">
            <p class="mb-1">Hi, my name is</p>
            <h1 className="intro__heading1">
              I MADE WAH<span className="color--accent">YUDI</span>
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
              <button className="btn btn-outline-light rounded-0 mt-4 px-5 py-2">
                <Link to="portfolio" smooth={true}>
                  Portfolio
                </Link>
              </button>
            </div>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <IntroBg />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Intro;
