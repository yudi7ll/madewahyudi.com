import { graphql, useStaticQuery } from 'gatsby'
import React, { memo } from 'react'
import { IPortfolioGraphql } from '.'
import Card from './Card'

const OpenSource = () => {
  const {
    allOpensourceJson: { nodes: openSourceList },
  }: IPortfolioGraphql = useStaticQuery(graphql`
    query {
      allOpensourceJson {
        nodes {
          id
          pageUrl
          sourceUrl
          title
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)

  return <>{openSourceList.map(Card)}</>
}

export default memo(OpenSource)
