import React from 'react'
import { ProprietaryIcon } from '../../../components/icons'
import { StaticImage } from 'gatsby-plugin-image'

const PortfolioCard = (
  {
    title,
    pageUrl,
    img = 'default.jpg',
  }: {
    title: string
    pageUrl?: string
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
          <ProprietaryIcon height="38px" width="38px" />
        </div>
        <div className="col-4">
          <span className="portfolio__link--disabled">Source</span>
        </div>
      </div>
    </div>
  </div>
)

const Proprietary = [
  {
    title: 'Chibi World',
    pageUrl: 'https://chibiworld.com',
  },
  {
    title: 'BoxyGuild',
    pageUrl: 'https://boxyguild.com',
  },
  {
    title: 'E-Learning',
  },
  {
    title: 'Kriya Bali',
  },
  {
    title: 'UPTD',
  },
  {
    title: 'E-Arsip',
  },
  {
    title: 'SPPD',
  },
  {
    title: 'The Yogasari Seminyak',
  },
  {
    title: 'Animal Lover Petshop',
    img: 'animal-lover.png',
  },
].map(PortfolioCard)

export default Proprietary
