import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className={styles['error-page']}>
      <h1>Oops! 😟</h1>
      <h2>Une erreur est survenue</h2>

      <div className={styles['error-details']}>
        <p className={styles['error-message']}>
          {error.message ||
            error.statusText ||
            "Une erreur inattendue s'est produite"}
        </p>
        {error.status && (
          <p className={styles['error-status']}>Status: {error.status}</p>
        )}
      </div>

      <Link to="/" className={styles['home-link']}>
        Retourner à l&apos;accueil
      </Link>
    </div>
  );
}
