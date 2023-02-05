import React from 'react'
import './styles.scss'
import {
  TelegramIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
  Icon,
} from '../../../components/icons'

const RenderSosmed = ({ Icon, to }: { Icon: Icon; to: string }) => (
  <a
    className="sosmed"
    href={to}
    target="_blank"
    rel="noreferrer"
    key={to}
    title={to}
  >
    <Icon className="sosmed__icon" fill="#fff" height="40px" width="40px" />
  </a>
)

const Sosmeds = [
  {
    to: 'https://t.me/yudi7ll',
    Icon: TelegramIcon,
  },
  {
    to: 'https://github.com/yudi7ll',
    Icon: GithubIcon,
  },
  {
    to: 'https://instagram.com/yudi7ll',
    Icon: InstagramIcon,
  },
  {
    to: 'https://twitter.com/yudi7ll',
    Icon: TwitterIcon,
  },
  {
    to: 'https://www.linkedin.com/in/yudi7ll',
    Icon: LinkedInIcon,
  },
].map(RenderSosmed)

export default Sosmeds