import React from "react"
import { SkillIcon } from 'components/common';
import "./styles.scss"

function Resume() {
  return (
    <div className="resume">
      <div className="resume__wrapper container">
        <div className="row">
          <div className="col-lg-4">
            <h3>
              <u>EDUCATION</u>
            </h3>
          </div>
          <div className="col-lg-8">
            <strong className="resume__text--lg">
              ITB STIKOM BALI DENPASAR
            </strong>
            <p className="mb-0 mt-3">Manajemen Informatika</p>
            <p>2018 - Present</p>
          </div>
        </div>
        <div className="border my-5"></div>
        <div className="row">
          <div className="col-lg-4">
            <h3>
              <u>SKILLS</u>
            </h3>
          </div>
          <div className="col-lg-8">
            <strong className="resume__text--lg">
              THE TOOLS & PROGRAMMING LANGUAGE THAT I USE
            </strong>
            <SkillIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
