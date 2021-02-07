import React from 'react';
import './styles.scss';

import {
  TelegramIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
} from 'components/icons';

function RenderSosmed({ Icon, to }) {
  return (
    <a
      className="sosmed"
      href={to}
      target="_blank"
      rel="noreferrer"
      key={to}
    >
      <Icon className="sosmed__icon" fill="#fff" height="40px" width="40px" />
    </a>
  );
}

export default () => [
  {
    to: 'https://t.me/mbeerrr',
    Icon: TelegramIcon
  },
  {
    to: 'https://github.com/yudi7ll',
    Icon: GithubIcon
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
    to: 'https://facebook.com/yudi7ll',
    Icon: FacebookIcon
  }
].map(RenderSosmed);
