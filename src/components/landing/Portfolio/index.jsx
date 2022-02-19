import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import pt from 'prop-types';

import './styles.scss';

import { GithubIcon } from 'components/icons';

function Portfolio() {
  const images = useStaticQuery(graphql`
    query {
      Fylo: file(relativePath: {eq: "portfolio/fylo.jpg"}, absolutePath: {}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Easybank: file(relativePath: {eq: "portfolio/easybank.jpg"}, absolutePath: {}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      TodoApp: file(relativePath: {eq: "portfolio/todo-app-main.jpg"}, absolutePath: {}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      IPAddressTracker: file(relativePath: {eq: "portfolio/ip-tracker.jpg"}, absolutePath: {}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Backpackbuddy: file(relativePath: {eq: "portfolio/backpackbuddy.jpg"}, absolutePath: {}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BoxyGuild: file(relativePath: {eq: "portfolio/boxyguild.jpg"}, absolutePath: {}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DashF: file(relativePath: {eq: "portfolio/dashf.jpg"}, absolutePath: {}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const PortfolioCard = ({ title, pageUrl, sourceUrl }, i) => {
    PortfolioCard.propTypes = {
      title: pt.string.isRequired,
      pageUrl: pt.string.isRequired,
      sourceUrl: pt.string.isRequired,
    };

    return (
      <div className="col-lg-4 col-md-6 mt-4" key={i}>
        <div className="portfolio__card border">
          <h3 className="portfolio__head py-3 border-bottom">{ title }</h3>
          <a className="portfolio__img-link" href={pageUrl} target="_blank" rel="noreferrer">
            <Img className="portfolio__img" fluid={images[title.replace(/ /g, '')].childImageSharp.fluid} alt={title} />
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
  };

  const PortfolioLists = () => [
    {
      title: 'BoxyGuild',
      sourceUrl: 'https://github.com/boxswap',
      pageUrl: 'https://boxyguild.com',
    },
    {
      title: 'Backpackbuddy',
      sourceUrl: 'https://github.com/yudi7ll/backpackbuddy',
      pageUrl: 'https://github.com/yudi7ll/backpackbuddy',
    },
    {
      title: 'Fylo',
      sourceUrl: 'https://github.com/yudi7ll/fylo',
      pageUrl: 'https://yudi7ll.github.io/fylo',
    },
    {
      title: 'Easybank',
      sourceUrl: 'https://github.com/yudi7ll/easybank',
      pageUrl: 'https://yudi7ll.github.io/easybank',
    },
    {
      title: 'Todo App',
      sourceUrl: 'https://github.com/yudi7ll/todo-app',
      pageUrl: 'https://yudi7ll.github.io/todo-app',
    },
    {
      title: 'IP Address Tracker',
      sourceUrl: 'https://github.com/yudi7ll/ip-address-tracker',
      pageUrl: 'https://addr.netlify.app',
    },
    {
      title: 'DashF',
      sourceUrl: 'https://github.com/yudi7ll/dashf',
      pageUrl: 'https://dashf.yudi.live',
    },
  ].map(PortfolioCard);

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="text__header text-center">
          <span>check out my </span>
          <span className="color--accent">works</span>
        </h2>
        <div className="row">
          <PortfolioLists />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
