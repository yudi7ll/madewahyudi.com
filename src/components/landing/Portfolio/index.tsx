import { PageProps } from 'gatsby'
import React from 'react'
import OpenSource from './OpenSource'
import Proprietary from './Proprietary'
import './styles.scss'

const Portfolio: React.FC<PageProps> = (props) => {
  console.log(props)

  return (
    <div className="mt-36" id="portfolio">
      <div className="container">
        <h2 className="text__header text-center">
          <span>check out my </span>
          <span className="color--accent">works</span>
        </h2>
        <div className="flex flex-1 basis-[300px] mt-4">
          <OpenSource />
        </div>
      </div>

      <div className="container portfolio">
        <h2 className="text__header text-center">
          <span className="color--accent">proprietary </span>
          project
        </h2>
        <small
          className="d-flex justify-content-center"
          style={{ opacity: 0.5 }}
        >
          (( Under construction ))
        </small>
        {/* <div className="row">{Proprietary}</div> */}
      </div>
    </div>
  )
}
export default Portfolio
