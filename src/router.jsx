import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProfileOverview from './pages/Profile/pages/ProfileOverview/ProfileOverview';
import ProfileData from './pages/Profile/pages/ProfileData/ProfileData';
// import { rootLoader } from './loaders/rootLoader';
import { profileLoader } from './loaders/profileLoader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/profile',
        element: <Profile />,
        loader: profileLoader,
        caseSensitive: true,
        children: [
          {
            index: true,
            element: <ProfileOverview />,
          },
          {
            path: 'data',
            element: <ProfileData />,
          },
        ],
      },
    ],
  },
]);
