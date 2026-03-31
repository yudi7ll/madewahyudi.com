import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { IPortfolio } from '.'
import { motion } from 'framer-motion'

const Card = ({ id, title, image, pageUrl, year }: IPortfolio) => (
  <motion.a
    key={id}
    href={pageUrl}
    target="_blank"
    className="card rounded-lg"
    rel="noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <div className="flex flex-col flex-1 h-full w-full relative">
      <GatsbyImage
        className="absolute inset-0 rounded-lg h-full"
        image={image.childImageSharp.gatsbyImageData}
        alt={title}
      />
      <div className="card-overlay z-[1] rounded-lg"></div>
      <div className="mt-auto mb-4 z-[2] pointer-events-auto absolute bottom-0 left-0 right-0">
        <p className="uppercase text-center text-lg font-semibold">{title}</p>
        <p className="text-center text-sm">Worked on in {year}</p>
      </div>
    </div>
  </motion.a>
)

export default Card
