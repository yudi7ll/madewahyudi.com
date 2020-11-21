import { Link } from 'gatsby';
import React from 'react';
import './styles.scss';

// styled components
import {
  Bio,
  Heading1,
  Wrapper,
} from './styles';

// icons 
import { 
  GithubIcon,
  InstagramIcon,
} from 'components/icons';

function Sosmed({ Icon, to }) {
  return (
      <Link
        target="_blank"
        to={to}
        style={{
          display: 'inline-block',
          marginRight: '.8em'
        }}
      >
        <Icon
          fill="#fff"
          height="35px"
          width="35px"
        />
      </Link>
  );
}

function Intro() {
  return (
    <Wrapper className="intro">
      <div className="container">
        <Heading1>Hello!, I'm Yudi</Heading1>
        <Bio>I’m a Web Developer from Bali Indonesia. Here I’ll make a website for you whether if it’s a Company Profile, Personal Website, Blog, etc.</Bio>
        <Sosmed
          to="https://github.com/yudi7ll" 
          Icon={GithubIcon}
        />
        <Sosmed
          to="https://instagram.com/yudi_ll"
          Icon={InstagramIcon}
        />
      </div>
    </Wrapper>
  );
}

export default Intro;
