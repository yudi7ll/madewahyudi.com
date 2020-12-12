import React from 'react';
import { SkillIcon } from 'components/common';
import './styles.scss';

import { MyToolsIllustration } from 'components/svg';

function MyTools() {
  return (
    <div className="mytools" id="tools">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <MyToolsIllustration className="w-100" />
          </div>
          <div className="col-lg-5">
            <h2 className="mytools__header text-center">
              the <span className="text--yellow">tools</span> that i use
            </h2>
            <SkillIcon className="text-center" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTools;
