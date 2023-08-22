
import styled from 'styled-components';

export const CardCont = styled.body  `
  display: inline-block;

`
export const Button = styled.button`
  display: inline-block;
  background-color: #FA8072;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  filter: brightness(0.8);
  cursor: pointer;
  padding: 0;

  &:hover {
    filter: brightness(2.5);
    transform: scale(1.5);
  }
`;

export const ButtonCont = styled.div`
  display: flex;
  width: 75%;
  margin-top: 0.5rem;
  justify-content: space-around;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; 
  flex-direction: column;
  align-items: center;
  background: transparent;
  width: fit-content;
  height: fit-content;
  padding: 0.2rem;
  border-radius: 10px;
  border: 10px solid orange;
  backdrop-filter: blur(5px);
  margin: 1rem;
  box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.h2`
  font-family: 'Barriecito', cursive;
  font-size: xx-large;
  font-weight: 700;
  color: black;
`;

export const Label = styled.h4`
  font-family: 'Barriecito', cursive;
  font-weight: 400;
  color: black;
  margin: 0px;
`;

export const Image = styled.img`
  max-width: 75%;
  height: 30%;
  margin-top: 0.5rem;
  border-radius: 10px;
`;

