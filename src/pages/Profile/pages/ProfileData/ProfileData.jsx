import { NavLink } from 'react-router-dom';

export default function ProfileData() {
  return (
    <>
      <h3>ProfileData</h3>
      <ul>
        <li>
          DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA
          DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA
          DATA DATA DATA DATA DATA DATA DATA DATA DATA DATA
        </li>
        {/* ... */}
        <NavLink preventScrollReset to="..">
          TO OVERVIEW
        </NavLink>
        {/* ... */}
      </ul>
    </>
  );
}
