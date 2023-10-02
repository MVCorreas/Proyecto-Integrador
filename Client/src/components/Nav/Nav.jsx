//import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom'
import styles from './StyledNav.module.css';

export default function Nav({ onSearch, onRandom, onLogout }) {

  return (
   
    <div className={styles.StyledContainer}> 
    <Link to='/home'>
        <div > 
          <button className={styles.NavButton} onSearch={onSearch}>Home</button>
        </div>
      </Link>
      <Link to='/favorites'>
        <div > 
          <button className={styles.NavButton}>Favorites</button>
        </div>
      </Link>
      <Link to='/about'>
        <div> 
          <button className={styles.NavButton}>About</button>
        </div>
      </Link>
      <Link to="/" >
        <div>
          <button className={styles.NavButton} onClick={onLogout}>LogOut</button>
        </div>
      </Link>
    </div>
  
  );
}