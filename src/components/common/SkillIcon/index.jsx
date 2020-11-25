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
      {
        [
          { Icon: JavascriptIcon, style: { backgroundColor: "#F7DF1E" } },
          { Icon: PhpIcon },
          { Icon: ReactIcon },
          { Icon: ReduxIcon },
          { Icon: LaravelIcon },
          { Icon: NextIcon },
          { Icon: GatsbyIcon },
          { Icon: GitIcon },
          { Icon: VimIcon },
          { Icon: FirefoxIcon },
          { Icon: WordpressIcon },
          { Icon: FigmaIcon },
        ].map(RenderIcon)
      }
    </div>
  );
}

export default SkillIcon;
