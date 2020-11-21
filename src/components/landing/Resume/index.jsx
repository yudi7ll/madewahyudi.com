import React from 'react';
import './styles.scss';

import {
  FigmaIcon,
  FirefoxIcon,
  GatsbyIcon,
  GitIcon,
  JavascriptIcon,
  LaravelIcon,
  NextIcon,
  PhpIcon,
  ReactIcon,
  ReduxIcon,
  WordpressIcon,
  VimIcon,
} from 'components/icons';

export function RenderIcon({ Icon, style = {} }) {
  return (
    <div
      className="d-inline-block rounded-circle border shadow-sm p-2 m-2"
      style={{
        ...style,
        overflow: 'hidden',
      }}
    >
      <Icon height="50px" width="50px" />
    </div>
  );
}

function Resume() {

  return (
    <div className="resume">
      <div className="resume__wrapper container">
        <div className="row">
          <div className="col-lg-4">
            <h3><u>EDUCATION</u></h3>
          </div>
          <div className="col-lg-8">
            <strong className="resume__text--lg">
              <span className="resume__divider"></span>
              ITB STIKOM BALI DENPASAR
            </strong>
            <p className="mb-0 mt-3">Manajemen Informatika</p>
            <p>2018 - Present</p>
          </div>
        </div>
        <div className="border my-5"></div>
        <div className="row">
          <div className="col-lg-4">
            <h3><u>SKILLS</u></h3>
          </div>
          <div className="col-lg-8">
            <strong className="resume__text--lg">
              THE TOOLS & PROGRAMMING LANGUAGE THAT I USE
            </strong>
            <div className="resume__icons col-lg-10 px-0 mt-2">
              <RenderIcon Icon={JavascriptIcon} style={{ backgroundColor: '#F7DF1E' }}/>
              <RenderIcon Icon={PhpIcon} />
              <RenderIcon Icon={ReactIcon} />
              <RenderIcon Icon={ReduxIcon} />
              <RenderIcon Icon={LaravelIcon} />
              <RenderIcon Icon={NextIcon} />
              <RenderIcon Icon={GatsbyIcon} />
              <RenderIcon Icon={GitIcon} />
              <RenderIcon Icon={VimIcon} />
              <RenderIcon Icon={FirefoxIcon} />
              <RenderIcon Icon={WordpressIcon} />
              <RenderIcon Icon={FigmaIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
