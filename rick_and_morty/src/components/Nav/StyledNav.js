import styled from 'styled-components';

export const StyledContainer = styled.div `
    display: flex;
    flex-direction: row;
    padding: 0%;
    justify-content: space-around;
    margin-top: 20px;
    
`;

export const NavButton = styled.button`
  display: inline-block;
  background-color: transparent;
  color: orange;
  font-weight: 700;
  border: 2px blueviolet solid;
  border-radius: px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  padding: 0.5rem;
  margin:  6rem;
  &:hover {
    filter: brightness(1.5);
    transform: scale(1.5);
  }
  `;