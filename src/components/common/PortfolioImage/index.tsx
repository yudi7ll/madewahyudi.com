import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const PortfolioImage = ({
  fileName,
  alt,
}: {
  fileName: string
  alt: string
}) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const fluid = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === fileName
  ).fluid

  return (
    <GatsbyImage
      image={{ images: [{ sources: allImageSharp, fallback: null }] }}
    />
  )
}

export default PortfolioImage
