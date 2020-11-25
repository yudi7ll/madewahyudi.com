import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./styles.scss"

// icons
import { GithubIcon } from "components/icons"

function Portfolio() {
  const data = useStaticQuery(graphql`
    query {
      fylo: file(relativePath: { eq: "portfolio/fylo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      easybank: file(relativePath: { eq: "portfolio/easybank.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const PortfolioCard = ({ img, projectName, sourceUrl, siteUrl }) => (
    <div className="col-sm-6 col-lg-4 mb-4" id="portfolio">
      <header>
        <h4>{projectName}</h4>
      </header>
      <div className="text-center">
        <a href={siteUrl} target="_blank" rel="noreferrer">
          <Img
            className="portfolio__img"
            loading="lazy"
            fluid={img}
            alt={projectName}
          />
        </a>
      </div>
      <div className="portfolio__link bg-white p-3 border d-flex align-items-center justify-content-around">
        <a className="text-dark" href={siteUrl} target="_blank" rel="noreferrer">
          <span>Visit</span>
        </a>
        <GithubIcon className="text-center" height="2em" width="2em" />
        <a className="text-dark" href={sourceUrl} target="_blank" rel="noreferrer">
          <span>Source</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="portfolio">
      <div className="container">
        <h2 className="text-center">CHECK OUT MY WORKS</h2>
        <div className="row mt-5">
          {
            [
              {
                projectName: 'Fylo',
                  img: data.fylo.childImageSharp.fluid,
                  sourceUrl: 'https://github.com/yudi7ll/fylo',
                  siteUrl: 'https://yudi7ll.github.io/fylo',
              },
              {
                projectName: 'Easybank',
                img: data.easybank.childImageSharp.fluid,
                sourceUrl: 'https://github.com/yudi7ll/easybank',
                siteUrl: 'https://yudi7ll.github.io/easybank',
              },
            ].map(props => <PortfolioCard {...props} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
