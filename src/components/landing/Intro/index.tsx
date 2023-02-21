import React from 'react'
import Illustration from '/static/images/illustration.svg'
import { Sosmeds } from '../../../components/common'
import './styles.scss'

const Intro = () => (
  <div className="intro relative pt-24" id="yudi">
    <div className="container px-32">
      <div className="flex justify-center w-full gap-4">
        <div className="py-12">
          <p>Hi, my name is</p>
          <h1 className="text-6xl leading-[120%]">
            <span>I MADE WAH</span>
            <span className="text-y-accent">YUDI</span>
          </h1>
          <p>
            <span>I&apos;m a web developer specialized in both</span>
            <strong> front-end</strong>
            <span> and</span>
            <strong> back-end</strong>.
          </p>
          <div className="my-4 space-x-2 whitespace-nowrap">{Sosmeds}</div>
          <div className="portfolio-btn cursor-pointer">
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
        </div>
        <div className="shrink-0">
          <Illustration />
        </div>
      </div>
    </div>
  </div>
)

export default Intro
