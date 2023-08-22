import styled from 'styled-components';


export const StyledSearch = styled.nav `
  background-color: rgba(255, 255, 255, 0.6); 
  display: inline-block;
  align-items: center; 
  border: 1px solid #ccc; 
  padding: 10px;
  height: 50%;
  margin: 100px;
  
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
  margin: 1rem; /* Adjust the margin as needed */
  &:hover {
    filter: brightness(1.5);
    transform: scale(1.5);
  }
  `;