import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { IPortfolio } from '.'
import { motion } from 'framer-motion'

const Card = ({ id, title, image, pageUrl, sourceUrl, year }: IPortfolio) => (
  <motion.div
    key={id}
    className="card rounded-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <div className="flex flex-col flex-1 h-full w-full relative group overflow-hidden rounded-lg">
      <div className="absolute inset-0 transition-transform duration-200 ease-out group-hover:scale-105">
        <GatsbyImage
          className="h-full"
          image={image.childImageSharp.gatsbyImageData}
          alt={title}
        />
      </div>
      <div className="card-overlay z-[1] rounded-lg"></div>
      <div className="mt-auto mb-4 z-[2] pointer-events-auto absolute bottom-0 left-0 right-0 px-4">
        <p className="uppercase text-center text-lg font-semibold">{title}</p>
        <p className="text-center text-sm mb-3">Worked on in {year}</p>
        {(pageUrl || sourceUrl) && (
          <div className="flex justify-center gap-4">
            {pageUrl && (
              <a
                href={pageUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full transition-colors border border-white/30"
              >
                Live Website
              </a>
            )}
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full transition-colors border border-white/30"
              >
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  </motion.div>
)

export default Card
