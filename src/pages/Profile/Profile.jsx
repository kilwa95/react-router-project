import {
  NavLink,
  Outlet,
  useParams,
  useSearchParams,
  useOutletContext,
  useLoaderData,
} from 'react-router-dom';

export default function Profile() {
  const { id } = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  const user = useOutletContext();
  const recipes = useLoaderData();

  console.log(user);
  console.log(id);
  console.log(queryParams.get('age'));

  return (
    <>
      <ul className="d-flex p-20">
        <li>
          <NavLink end to="">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="data">Data</NavLink>
        </li>
      </ul>
      <div className="p-20">
        <h2 className="mb-20">Profile</h2>
        <ul>
          {recipes && recipes.map((r) => <li key={r._id}>{r.title}</li>)}{' '}
        </ul>
        <Outlet />
      </div>
    </>
  );
}
