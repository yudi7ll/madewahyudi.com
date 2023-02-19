import React from 'react'
import './styles.scss'

export interface CardProps {
  title: string
  img?: string
  sourceUrl?: string
  pageUrl?: string
}

const Card = ({
  title,
  img = 'under-construction.jpg',
  sourceUrl,
  pageUrl,
}: CardProps) => {
  // const imgValue = 'fylo'
  // const query = useStaticQuery<IGatsbyImageData>(graphql`
  //   query ($imgValue: String = "fylo") {
  //     allFile(filter: { name: { eq: $imgValue } }) {
  //       nodes {
  //         childImageSharp {
  //           gatsbyImageData
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log(query)
  return (
    <div key={title} className="card">
      <div className="flex flex-col h-full w-full p-4">
        <h3 className="uppercase text-center mt-auto">{title}</h3>
        {/* <GatsbyImage image={getImage(img)} /> */}
      </div>
    </div>
  )
}

export default Card
