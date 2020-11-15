import styled from 'styled-components';
import introBg from 'images/intro.jpg';

export const Wrapper = styled.div`
  background-image: url('${introBg}');
  background-position: center;
  background-size: cover;
  padding: 10rem 0 4rem 0;
  position: relative;
  text-align: center;
  z-index: -2;

  &:before {
    background-color: rgba(0,0,0, .4);
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Heading1 = styled.h1`
  color: white;
  font-family: Anton, sans-serif;
  font-size: 3.5em;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Bio = styled.p`
  color: white;
  line-height: 150%;
  margin: 0 auto;
  max-width: 600px;
`;
