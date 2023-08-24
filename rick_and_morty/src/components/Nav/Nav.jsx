//import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom'
import styles from '../Nav/StyledNav.module.css';

export default function Nav({ onSearch, onRandom }) {

  return (
    <>
    <div className={styles.StyledContainer}> {/* Usa styles.StyledContainer */}
      <Link to='/about'>
        <div className={styles.NavButton}> {/* Usa styles.NavButton */}
          <button>About</button>
        </div>
      </Link>
      <Link to='/home'>
        <div className={styles.NavButton}> {/* Usa styles.NavButton */}
          <button>Home</button>
        </div>
      </Link>
      <Link to='/favorites'>
        <div className={styles.NavButton}> {/* Usa styles.NavButton */}
          <button>Favorites</button>
        </div>
      </Link>
    </div>
    {/* <div>
      <StyledSearch>
        <nav>
          <SearchBar onSearch={onSearch} />
          <NavButton><button onClick={onRandom}>Random</button></NavButton>
        </nav>
      </StyledSearch>
    </div> */}
  </>

  );
}