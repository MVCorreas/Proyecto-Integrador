import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom'
import { StyledContainer, NavButton } from "./StyledNav";

export default function Nav({ onSearch, onRandom }) {

  return (
    
    <StyledContainer>
      <div>
    <Link to='/about'>
      <NavButton><button>About</button></NavButton>
    </Link>
    <Link to='/home'>
    <NavButton><button>Home</button></NavButton>
    </Link>
    <Link to='/favorites'>
    <NavButton><button>Favorites</button></NavButton>
    </Link>
    <nav>
      <SearchBar onSearch={onSearch} />
      <NavButton><button onClick={onRandom}>Random</button></NavButton>
    </nav>
    </div>
    </StyledContainer>
  );
}