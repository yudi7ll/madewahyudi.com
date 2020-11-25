import React from 'react';

// Icons
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
} from "components/icons"

function SkillIcon() {

  const RenderIcon = ({ Icon, style = {} }) => {
    return (
      <div
        className="d-inline-block rounded-circle border shadow-sm p-2 m-2"
        style={{
          ...style,
          overflow: "hidden",
        }}
      >
        <Icon height="50px" width="50px" />
      </div>
    )
  }

  return (
    <div className="col-lg-10 px-0 mt-2">
      <RenderIcon
        Icon={JavascriptIcon}
        style={{ backgroundColor: "#F7DF1E" }}
      />
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
  );
}

export default SkillIcon;
