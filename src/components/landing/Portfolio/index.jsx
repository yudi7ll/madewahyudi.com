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

  const PortfolioCard = ({ img, projectName, url, siteUrl }) => (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div>
        <a href={siteUrl} target="_blank">
          <Img
            className="portfolio__img"
            loading="lazy"
            fluid={img}
            alt={projectName}
          />
        </a>
      </div>
      <div className="portfolio__link bg-white p-3 border">
        <a className="text-dark" href={url} target="_blank">
          <GithubIcon height="2em" width="2em" />
          &nbsp; {projectName}
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
                url: 'https://github.com/yudi7ll/fylo',
                siteUrl: 'https://yudi7ll.github.io/fylo',
              },
              {
                projectName: 'Easybank',
                img: data.easybank.childImageSharp.fluid,
                url: 'https://github.com/yudi7ll/easybank',
                siteUrl: 'https://yudi7ll.github.io/easybank',
              },
              {
                projectName: 'Easybank',
                img: data.easybank.childImageSharp.fluid,
                url: 'https://github.com/yudi7ll/easybank',
                siteUrl: 'https://yudi7ll.github.io/easybank',
              },
              {
                projectName: 'Easybank',
                img: data.easybank.childImageSharp.fluid,
                url: 'https://github.com/yudi7ll/easybank',
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
