import React from 'react'
import { CircleIcon } from '../../icons'

const Footer = () => (
  <footer className="mt-40">
    <div className="container">
      <div className="text-center text-white py-4">
        <small className="text-xs flex items-center justify-center space-x-1">
          <span>&copy; Copyright </span>
          <span>{new Date().getFullYear()}</span>
          <a href="https://github.com/yudi7ll" target="_blank" rel="noreferrer">
            Yudi
          </a>
          {/* <CircleIcon className="mx-1" height="10px" width="10px" fill="#fff" /> */}
          {/* <span>Under development</span> */}
        </small>
      </div>
    </div>
  </footer>
)

export default Footer
