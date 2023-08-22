import styled from 'styled-components';

export const FormContainer = styled.div `
  background-color: rgba(255, 255, 255, 0.6); 
  text-align: right; 
  display: flex;
  align-items: flex-start; 
  border: 1px solid #ccc; 
  padding: 20px;
  height: 100%;
  width: 20%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: xx-large;

`
export const Button = styled.button`
  display: inline-block;
  background-color: transparent;
  color: orange;
  font-weight: 700;
  border: 2px blueviolet solid;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  padding: 0.5rem;
  margin:  6rem;
  &:hover {
    filter: brightness(1.5);
    transform: scale(2.5);
  }
`;

export const StyledErrors = styled.span `
    font-size: small;
    font-weight: 300;
    color: purple;
`;

export const StyledTitle = styled.h1`
  font-size: xx-large;
  font-weight: bolder;
  color: purple;
`;