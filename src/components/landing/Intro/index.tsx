import React from 'react'
import Illustration from '/static/images/illustration.svg'
import { Sosmeds } from '../../../components/common'
import { motion } from 'framer-motion'
import './styles.scss'

const Intro = () => (
  <div className="intro relative pt-24 z-20" id="yudi">
    <div className="container px-4 xl:px-32">
      <div className="flex justify-start w-full xl:gap-x-12 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="py-12 lg:min-w-fit"
        >
          <p>Hi, my name is</p>
          <h1 className="text-6xl leading-[120%]">
            <span>I MADE </span>
            <span className="whitespace-nowrap">
              WAH
              <span className="text-y-accent relative circ-2">
                <span>YUDI</span>
              </span>
            </span>
          </h1>
          <p className="max-w-sm">
            <span>I&apos;m a web developer specialized in both</span>
            <strong className="whitespace-nowrap"> front-end</strong>
            <span> and</span>
            <strong className="whitespace-nowrap"> back-end</strong>.
          </p>
          <div className="my-4 space-x-2 whitespace-nowrap">{Sosmeds}</div>
          <div className="portfolio-btn cursor-pointer inline-block">
            <button
              type="button"
              className="rounded text-sm"
              onClick={() => {
                document
                  .querySelector('#portfolio')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="px-5">Portfolio</span>
              <i />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="hidden lg:block"
        >
          <Illustration />
        </motion.div>
      </div>
    </div>
  </div>
)

export default Intro
