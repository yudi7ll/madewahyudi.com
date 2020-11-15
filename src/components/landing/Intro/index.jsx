import { Link } from 'gatsby';
import React from 'react';

// styled components
import {
  Bio,
  Heading1,
  Wrapper,
} from './styles';

// icons 
import { Icons } from 'components/common';

function Sosmed({ children, to }) {
  return (
      <Link
        target="_blank"
        to={to}
        style={{
          display: 'inline-block',
          marginRight: '.8em'
        }}
      >
        { children }
      </Link>
  );
}

function Intro() {
  return (
    <Wrapper>
      <Heading1>Hello!, I'm Yudi</Heading1>
      <Bio>I’m a Web Developer from Bali Indonesia. Here I’ll make a website for you whether if it’s a Company Profile, Personal Website, Blog, etc.</Bio>
      <Sosmed to="https://github.com/yudi7ll">
        <Icons.GithubIcon
          fill="#fff"
          height="35px"
          width="35px"
        />
      </Sosmed>
      <Sosmed to="https://instagram.com/yudi_ll">
        <Icons.InstagramIcon
          fill="#fff"
          height="35px"
          width="35px"
        />
      </Sosmed>
    </Wrapper>
  );
}

export default Intro;
