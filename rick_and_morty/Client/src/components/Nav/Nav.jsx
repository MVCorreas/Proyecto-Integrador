//import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom'
import styles from './StyledNav.module.css';

export default function Nav({ onSearch, onRandom }) {

  return (
   
    <div className={styles.StyledContainer}> 
      <Link to='/about'>
        <div className={styles.NavButton}> 
          <button>About</button>
        </div>
      </Link>
      <Link to='/home'>
        <div className={styles.NavButton}> 
          <button>Home</button>
        </div>
      </Link>
      <Link to='/favorites'>
        <div className={styles.NavButton}> 
          <button>Favorites</button>
        </div>
      </Link>
    </div>
  
  );
}