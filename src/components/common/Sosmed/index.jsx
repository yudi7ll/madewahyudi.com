import React from 'react';
import './styles.scss';

import {
  WhatsappIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
} from 'components/icons';

function RenderSosmed({ Icon, to }) {
  return (
    <a
      className="mr-3"
      href={to}
      style={{
        display: "inline-block",
        marginRight: ".8em",
      }}
      target="_blank"
      rel="noreferrer"
      key={to}
    >
      <Icon className="icon" fill="#fff" height="40px" width="40px" />
    </a>
  );
}

export default () => [
  {
    to: 'https://wa.me/6288219140763',
    Icon: WhatsappIcon
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
    to: 'https://facebook.com/yudi1ll',
    Icon: FacebookIcon
  }
].map(RenderSosmed);
