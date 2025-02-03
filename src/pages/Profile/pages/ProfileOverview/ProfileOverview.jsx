import { useNavigate } from 'react-router-dom';

export default function ProfileOverview() {
  const navigate = useNavigate();

  function navigateToData() {
    navigate('data', { preventScrollReset: true });
  }

  return (
    <>
      <h3>ProfileOverview</h3>
      <button onClick={navigateToData}>data</button>
      <ul>
        <li>
          OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW
          OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW
          OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW
          OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW
          OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW
          OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW
          OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW OVERVIEW
        </li>
        {/* ... */}
      </ul>
    </>
  );
}
