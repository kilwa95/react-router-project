import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {
  Outlet,
  ScrollRestoration,
  useNavigation,
  useLoaderData,
} from 'react-router-dom';
import styles from './App.module.scss';

function App() {
  const navigation = useNavigation();
  const user = useLoaderData();

  useEffect(() => {
    console.log(navigation);
  }, [navigation]);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      {navigation.state === 'loading' && (
        <h1>
          Loading{' '}
          {navigation.location.pathname === '/' && <strong>Homepage</strong>}{' '}
        </h1>
      )}
      <div className="flex-fill">
        <Outlet context={user} />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
export default App;
