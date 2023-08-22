import styled from 'styled-components';
import AboutImage from '../../Assets/R&MAbout.webp';

export const AboutBackground = styled.div `
  background-image: url(${AboutImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100vh;
  
`;

export const AboutTitle = styled.h2`
    font-family: 'Barriecito', cursive;
    font-size: xx-large;
    color: white;
    justify-content: center;
    margin-left: 40%;
`

export const AboutP= styled.div`
    font-family: 'Barriecito', cursive;
    font-size: x-large;
    color: white;
    justify-content: center;
    margin: 50px;
`