import React from 'react';

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
      className="mx-2"
      href={to}
      style={{
        display: "inline-block",
        marginRight: ".8em",
      }}
      target="_blank"
      rel="noreferrer"
      key={to}
    >
      <Icon fill="#fff" height="40px" width="40px" />
    </a>
  );
}

export default () => [
  {
    to: 'https://wa.me/628819140763',
    Icon: WhatsappIcon
  },
  {
    to: 'https://github.com/yudi7ll',
    Icon: GithubIcon
  },
  {
    to: 'https://instagram.com/yudi_ll',
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
