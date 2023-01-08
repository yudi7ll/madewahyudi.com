import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import pt from 'prop-types';
import Img from 'gatsby-image';
import { ProprietaryIcon } from 'components/icons';

function PortfolioCard({ title, pageUrl }, i) {
  PortfolioCard.propTypes = {
    title: pt.string.isRequired,
    pageUrl: pt.string.isRequired,
  };

  const images = useStaticQuery(graphql`
    query {
        ChibiWorld: file(relativePath: { eq: "portfolio/chibiworld.png" } absolutePath: {}) {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        BoxyGuild: file(relativePath: { eq: "portfolio/boxyguild.jpg" } absolutePath: {}) {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ELearning: file(relativePath: { eq: "portfolio/default.jpg" } absolutePath: {}) {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        KriyaBali: file(relativePath: { eq: "portfolio/default.jpg" } absolutePath: {}) {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        UPTD: file(relativePath: { eq: "portfolio/default.jpg" } absolutePath: {}) {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        SPPD: file(relativePath: { eq: "portfolio/default.jpg" } absolutePath: {}) {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        TheYogasariSeminyak: file(relativePath: { eq: "portfolio/default.jpg" } absolutePath: {}) {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        EArsip: file(relativePath: { eq: "portfolio/default.jpg" } absolutePath: {}) {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `);

  return (
    <div className="col-lg-4 col-md-6 mt-4" key={i}>
      <div className="portfolio__card border">
        <h3 className="portfolio__head py-3 border-bottom">{title}</h3>
        <a
          className="portfolio__img-link"
          href={pageUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Img
            className="portfolio__img"
            fluid={images[title.replace(/[ |-]/g, '')].childImageSharp.fluid}
            alt={title}
          />
        </a>
        <div className="portfolio__action d-flex align-items-center p-3 border-top text-center">
          <div className="col-4">
            {pageUrl ? (
              <a
                className="text-white portfolio__link"
                href={pageUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>
            ) : (
              <div className="portfolio__link--disabled">Visit</div>
            )}
          </div>
          <div className="col-4">
            <ProprietaryIcon height="38px" width="38px" />
          </div>
          <div className="col-4">
            <span
              className="portfolio__link--disabled"
            >
              Source
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Proprietary = () => [
  {
    title: 'Chibi World',
    pageUrl: 'https://chibiworld.com',
  },
  {
    title: 'BoxyGuild',
    pageUrl: 'https://boxyguild.com',
  },
  {
    title: 'E-Learning',
    pageUrl: null,
  },
  {
    title: 'Kriya Bali',
    pageUrl: null,
  },
  {
    title: 'UPTD',
    pageUrl: null,
  },
  {
    title: 'E-Arsip',
    pageUrl: null,
  },
  {
    title: 'SPPD',
    pageUrl: null,
  },
  {
    title: 'The Yogasari Seminyak',
    pageUrl: null,
  },
].map(PortfolioCard);

export default Proprietary;
