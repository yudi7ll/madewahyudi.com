import React, { memo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IAllOpenSourceJsonGraphql, IAllProprietaryJsonGraphql } from '.'
import Card from './Card'

const Proprietary = () => {
  const {
    allProprietaryJson: { nodes: proprietaryList },
  }: IAllProprietaryJsonGraphql = useStaticQuery(graphql`
    query {
      allProprietaryJson {
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

  return <>{proprietaryList.map(Card)}</>
}

export default memo(Proprietary)
