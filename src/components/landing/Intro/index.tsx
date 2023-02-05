import React from 'react'
import Illustration from '../../../images/illustration.svg'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { Sosmeds } from '../../../components/common'
import './styles.scss'

const Intro = () => (
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
      <div className="intro__wrapper">
        <div className="intro__content">
          <p className="mb-1">Hi, my name is</p>
          <h1 className="intro__heading1">
            <span>I MADE WAH</span>
            <span className="color--accent">YUDI</span>
          </h1>
          <p className="intro__description">
            <span>I&apos;m a web developer specialized in both</span>
            <strong> front-end</strong>
            <span> and</span>
            <strong> back-end</strong>.
          </p>
          <div className="intro__sosmed mt-4">{Sosmeds}</div>
          <div className="intro__portfolio-btn">
            <Link className="btn mt-4 px-5 py-2" to="portfolio">
              <span>Portfolio</span>
              <i />
            </Link>
          </div>
        </div>
        <div className="intro__illustration">
          <Illustration />
        </div>
      </div>
    </div>
  </motion.div>
)

export default Intro
