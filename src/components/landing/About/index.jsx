import React from 'react';
import RectBg from 'images/rectangle.svg';

// styled components
import {
  AboutText,
  Background,
  DownloadButton,
  Heading2,
  ParagraphText,
  Trapezoid,
  Wrapper,
} from './styles';

function About() {
  return (
    <Background>
      <Trapezoid src={RectBg} />
      <Wrapper>
        <div>
          <Heading2>About Me</Heading2>
          <ParagraphText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit a est voluptates inventore repellendus, voluptatum maiores placeat blanditiis magni consequuntur.</ParagraphText>
        </div>
        <div style={{ marginTop: '1em', marginBottom: '1em' }}>
          <Heading2>Contact Details</Heading2>
          <p>I Made Wahyudi</p>
          <p>Denpasar Indonesia, 80117</p>
          <p>madewahyudi22@gmail.com</p>
        </div>
        <DownloadButton>DOWNLOAD RESUME</DownloadButton>
      </Wrapper>
    </Background>
  );
}

export default About;
