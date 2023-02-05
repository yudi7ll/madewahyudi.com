import React from 'react'
import { SkillIcon } from '../../../components/common'
import { MyToolsIllustration } from '../../../components/svg'
import './styles.scss'

const MyTools = () => (
  <div className="mytools" id="tools">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <MyToolsIllustration className="w-100" />
        </div>
        <div className="col-lg-5 mt-3 mt-lg-0">
          <h2 className="text__header text-center">
            <span>the</span>
            <span className="color--accent"> tools</span>
            <span> that i use</span>
          </h2>
          <SkillIcon className="text-center mw-50" />
        </div>
      </div>
    </div>
  </div>
)

export default MyTools
