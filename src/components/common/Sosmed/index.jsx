import React from 'react';
import pt from 'prop-types';
import './styles.scss';

import {
  TelegramIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
} from 'components/icons';

function RenderSosmed({ Icon, to }) {
  return (
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
  );
}

RenderSosmed.propTypes = {
  Icon: pt.instanceOf(Object).isRequired,
  to: pt.string.isRequired,
};

export default () => [
  {
    to: 'https://t.me/mbeerrr',
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
].map(RenderSosmed);
