import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { IPortfolio } from '.'

const Card = ({ id, title, image, pageUrl }: IPortfolio) => (
  <a
    key={id}
    href={pageUrl}
    target="_blank"
    className="card rounded-lg"
    rel="noreferrer"
  >
    <div className="flex flex-col h-full w-full relative">
      <GatsbyImage
        className="absolute inset-0 rounded-lg"
        image={image.childImageSharp.gatsbyImageData}
        alt={title}
      />
      <div className="card-overlay rounded-lg"></div>
      <div className="mt-auto mb-4 z-[1] pointer-events-auto absolute bottom-0 left-0 right-0">
        <p className="uppercase text-center text-lg font-semibold">{title}</p>
      </div>
    </div>
  </a>
)

export default Card
