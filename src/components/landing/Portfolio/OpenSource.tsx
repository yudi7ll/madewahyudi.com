import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { IAllOpenSourceJsonGraphql } from '.'
import Card from './Card'

const OpenSource = () => {
  const {
    allOpensourceJson: { nodes: openSourceList },
  }: IAllOpenSourceJsonGraphql = useStaticQuery(graphql`
    query {
      allOpensourceJson {
        nodes {
          id
          pageUrl
          sourceUrl
          title
          year
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

export default OpenSource
