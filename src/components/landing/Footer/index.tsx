import React from 'react'
import './styles.scss'
import { CircleIcon } from '../../icons'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="text-center text-white py-4">
        <small className="text__xs">
          <span>&copy; Copyright </span>
          <span>{new Date().getFullYear()}</span>
          <a href="https://github.com/yudi7ll" target="_blank" rel="noreferrer">
            {' '}
            Yudi
          </a>
          <CircleIcon className="mx-1" height="10px" width="10px" fill="#fff" />
          Under development
        </small>
      </div>
    </div>
  </footer>
)

export default Footer
