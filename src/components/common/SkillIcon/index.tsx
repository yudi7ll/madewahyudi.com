import React, { CSSProperties, HTMLAttributes } from 'react'
import {
  LinuxIcon,
  FigmaIcon,
  GatsbyIcon,
  GitIcon,
  JavascriptIcon,
  LaravelIcon,
  NextIcon,
  NodejsIcon,
  PhpIcon,
  ReactIcon,
  ReduxIcon,
  WordpressIcon,
  VimIcon,
  Icon,
  TypescriptIcon,
} from '../../../components/icons'

const RenderIcon = (
  { Icon, style }: { Icon: Icon; style?: CSSProperties },
  index: number
) => (
  <div
    key={index}
    className="inline-block rounded-full border shadow p-2 m-2"
    style={{
      backgroundColor: '#f2f2f2',
      overflow: 'hidden',
      ...style,
    }}
  >
    <Icon height="45px" width="45px" />
  </div>
)

const SkillIcon = (props: HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>
    {[
      { Icon: LinuxIcon },
      { Icon: JavascriptIcon, style: { backgroundColor: '#F7DF1E', borderColor: '#F7DF1E' } },
      { Icon: TypescriptIcon, style: { backgroundColor: '#3178C6', borderColor: '#3178C6' } },
      { Icon: PhpIcon },
      { Icon: ReactIcon },
      { Icon: ReduxIcon },
      { Icon: LaravelIcon },
      { Icon: NodejsIcon },
      { Icon: NextIcon },
      { Icon: GatsbyIcon },
      { Icon: GitIcon },
      { Icon: VimIcon },
      { Icon: WordpressIcon },
      { Icon: FigmaIcon },
    ].map(RenderIcon)}
  </div>
)

export default SkillIcon
