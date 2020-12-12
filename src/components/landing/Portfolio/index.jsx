import Img from 'gatsby-image';
import React from 'react';
import { useStaticQuery } from 'gatsby';
import './styles.scss';

import { GithubIcon } from 'components/icons';

function Portfolio() {
  const images = useStaticQuery(graphql`
    query {
      fylo: file(relativePath: {eq: "portfolio/fylo.png"}, absolutePath: {}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const PortfolioCard = ({ title, pageUrl, sourceUrl }, i) => (
    <div className="portfolio__card border" key={i}>
      <h4 className="portfolio__head py-2 border-bottom">{title}</h4>
      <a href={pageUrl} target="_blank" rel="noreferrer">
        <Img className="portfolio__img" fluid={images.fylo.childImageSharp.fluid} alt={title} />
      </a>
      <div className="d-flex align-items-center justify-content-around py-3 border-top">
        <a className="text-white" href={pageUrl} target="_blank" rel="noreferrer">Visit</a>
        <GithubIcon height="38px" width="38px" fill="#fff" />
        <a className="text-white" href={sourceUrl} target="_blank" rel="noreferrer">Source</a>
      </div>
    </div>
  );

  const PortfolioLists = () => [
    {
      title: 'Fylo',
      sourceUrl: 'https://github.com/yudi7ll/fylo',
      pageUrl: 'https://yudi7ll.github.io/fylo'
    }
  ].map(PortfolioCard);

  return (
    <div className="portfolio mt-5" id="portfolio">
      <div className="container">
        <h2 className="portfolio__title text-uppercase text-center">
          check out my <span className="portfolio--yellow">works</span>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <PortfolioLists />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
