import styled from 'styled-components';

export const StyledContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.6); 
    width: 100%;
    height:15%;
    z-index: 20;
    
    
`;

export const NavButton = styled.button`
  display: inline-block;
  background-color: transparent;
  font-weight: 700;
  border: 2px blueviolet solid;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
  margin:  6rem;
  &:hover {
    filter: brightness(1.5);
    transform: scale(1.5);
  
  }
  `;