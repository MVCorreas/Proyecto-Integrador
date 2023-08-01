import SearchBar from "./SearchBar";
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
    <nav>
      <SearchBar onSearch={onSearch} />
      <button onClick={onRandom}>Random</button>
    </nav>
    </>
  );
}