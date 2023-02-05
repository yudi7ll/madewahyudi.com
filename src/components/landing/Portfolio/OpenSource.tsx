import React from 'react'
import { GithubIcon } from '../../../components/icons'
import { StaticImage } from 'gatsby-plugin-image'

const PortfolioCard = (
  {
    title,
    pageUrl,
    sourceUrl,
    img = 'under-construction.jpg',
  }: {
    title: string
    pageUrl?: string
    sourceUrl?: string
    img?: string
  },
  i: number
) => (
  <div className="col-lg-4 col-md-6 mt-4" key={i}>
    <div className="portfolio__card border">
      <h3 className="portfolio__head py-3 border-bottom">{title}</h3>
      <a
        className="portfolio__img-link"
        href={pageUrl}
        target="_blank"
        rel="noreferrer"
      >
        <StaticImage
          src={`../../../images/portfolio/${img}`}
          className="portfolio__img"
          alt={title}
        />
      </a>
      <div className="portfolio__action d-flex align-items-center p-3 border-top text-center">
        <div className="col-4">
          {pageUrl ? (
            <a
              className="text-white portfolio__link"
              href={pageUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit
            </a>
          ) : (
            <div className="portfolio__link--disabled">Visit</div>
          )}
        </div>
        <div className="col-4">
          <GithubIcon height="38px" width="38px" fill="#fff" />
        </div>
        <div className="col-4">
          {sourceUrl ? (
            <a
              className="text-white portfolio__link"
              href={sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          ) : (
            <div className="portfolio__link--disabled">Source</div>
          )}
        </div>
      </div>
    </div>
  </div>
)

const OpenSource = [
  {
    title: 'Backpackbuddy',
    sourceUrl: 'https://github.com/yudi7ll/backpackbuddy',
    pageUrl: 'https://backpackbuddy.madewahyudi.com',
    img: 'backpackbuddy.jpg',
  },
  {
    title: 'Backpackbuddy Admin Panel',
    sourceUrl: 'https://github.com/yudi7ll/backpackbuddy-admin',
    pageUrl: 'https://admin-backpackbuddy.madewahyudi.com',
    img: 'admin-backpackbuddy.png',
  },
  {
    title: 'DashF',
    sourceUrl: 'https://github.com/yudi7ll/dash-f',
    pageUrl: 'https://dash-f.madewahyudi.com',
    img: 'dashf.jpg',
  },
  {
    title: 'Fylo',
    sourceUrl: 'https://github.com/yudi7ll/fylo',
    pageUrl: 'https://yudi7ll.github.io/fylo',
    img: 'fylo.jpg',
  },
  {
    title: 'Easybank',
    sourceUrl: 'https://github.com/yudi7ll/easybank',
    pageUrl: 'https://yudi7ll.github.io/easybank',
    img: 'easybank.jpg',
  },
  {
    title: 'Todo App',
    sourceUrl: 'https://github.com/yudi7ll/todo-app',
    pageUrl: 'https://yudi7ll.github.io/todo-app',
    img: 'todo-app-main.jpg',
  },
  {
    title: 'IP Address Tracker',
    sourceUrl: 'https://github.com/yudi7ll/ip-address-tracker',
    pageUrl: 'https://addr.netlify.app',
    img: 'ip-tracker.jpg',
  },
  {
    title: 'Grep Voodh',
  },
  {
    title: 'E-Quizz',
    sourceUrl: 'https://github.com/yudi7ll/equizz',
  },
  {
    title: 'Url Shortener',
    sourceUrl: 'https://github.com/yudi7ll/shorten-url',
  },
].map(PortfolioCard)

export default OpenSource
