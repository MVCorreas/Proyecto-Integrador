import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom'

export default function Nav({ onSearch, onRandom }) {

  return (
    <>
    <Link to='/about'>
      <button>About</button>
    </Link>
    <Link to='/home'>
    <button>Home</button>
    </Link>
    <Link to='/favorites'>
    <button>Favorites</button>
    </Link>
    <nav>
      <SearchBar onSearch={onSearch} />
      <button onClick={onRandom}>Random</button>
    </nav>
    </>
  );
}