import { NavLink, useMatch } from 'react-router-dom';
import styles from './Header.module.scss';

function Header() {
  const matchProfile = useMatch('/profile');
  const matchHomepage = useMatch('/');

  console.log(matchProfile);
  console.log(matchHomepage);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <strong> React-router </strong>
      </div>
      <ul className={styles.headerList}>
        <NavLink end to="/">
          Homepage
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </ul>
    </header>
  );
}

export default Header;
