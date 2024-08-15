import { IGatsbyImageData } from 'gatsby-plugin-image'
import React, { HTMLAttributes } from 'react'
import OpenSource from './OpenSource'
import Proprietary from './Proprietary'
import './styles.scss'

export interface IPortfolio {
  id: string
  title: string
  pageUrl?: string
  sourceUrl: string
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export interface IAllOpenSourceJsonGraphql {
  allOpensourceJson: {
    nodes: IPortfolio[]
  }
}

export interface IAllProprietaryJsonGraphql {
  allProprietaryJson: {
    nodes: IPortfolio[]
  }
}

const Grid = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div className="flex flex-1 flex-wrap justify-center gap-4 mt-4">
    {children}
  </div>
)

const Portfolio = () => (
  <div className="mt-52 px-4" id="portfolio">
    <div className="container">
      <h2 className="text-header text-center uppercase">
        <span>check out my </span>
        <span className="text-y-accent">works</span>
      </h2>
      <Grid>
        <OpenSource />
      </Grid>
    </div>

    <div className="container mt-24">
      <h2 className="text-header text-center uppercase">
        <span className="text-y-accent">proprietary </span>
        project
      </h2>
      <small className="flex justify-center" style={{ opacity: 0.5 }}>
        (( Under development ⚠ ))
      </small>
      <Grid>
        <Proprietary />
      </Grid>
    </div>
  </div>
)

export default Portfolio
