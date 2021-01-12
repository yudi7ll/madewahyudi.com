import Img from 'gatsby-image';
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './styles.scss';

import { GithubIcon } from 'components/icons';

function Portfolio() {
  const images = useStaticQuery(graphql`
    query {
      Fylo: file(relativePath: {eq: "portfolio/fylo.png"}, absolutePath: {}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Easybank: file(relativePath: {eq: "portfolio/easybank.png"}, absolutePath: {}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const PortfolioCard = ({ title, pageUrl, sourceUrl }, i) => (
    <div className="col-lg-4 col-md-6 mt-4" key={i}>
      <div className="portfolio__card border">
        <h5 className="portfolio__head py-3 border-bottom">{title}</h5>
        <a className="portfolio__img-link" href={pageUrl} target="_blank" rel="noreferrer">
          <Img className="portfolio__img" fluid={images[title].childImageSharp.fluid} alt={title} />
        </a>
        <div className="portfolio__action d-flex align-items-center p-3 border-top text-center">
          <div className="col-4">
            <a className="text-white portfolio__link" href={pageUrl} target="_blank" rel="noreferrer">Visit</a>
          </div>
          <div className="col-4">
            <GithubIcon height="38px" width="38px" fill="#fff" />
          </div>
          <div className="col-4">
            <a className="text-white portfolio__link" href={sourceUrl} target="_blank" rel="noreferrer">Source</a>
          </div>
        </div>
      </div>
    </div>
  );

  const PortfolioLists = () => [
    {
      title: 'Fylo',
      sourceUrl: 'https://github.com/yudi7ll/fylo',
      pageUrl: 'https://yudi7ll.github.io/fylo'
    },
    {
      title: 'Easybank',
      sourceUrl: 'https://github.com/yudi7ll/easybank',
      pageUrl: 'https://yudi7ll.github.io/easybank'
    }
  ].map(PortfolioCard);

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="text__header text-center">
          check out my <span className="color--accent">works</span>
        </h2>
        <div className="row">
          <PortfolioLists />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
