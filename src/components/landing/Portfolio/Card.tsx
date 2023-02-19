import { StaticImage } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'
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
  return (
    <div key={title} className="card">
      <div className="flex flex-col h-full w-full p-4">
        <h3 className="uppercase text-center mt-auto">{title}</h3>
        <StaticImage src={`../../../images/portfolio/${img}`} alt={title} />
      </div>
    </div>
  )
}

export default Card
