import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      className={`${styles.errorContainer} d-flex flex-column align-items-center justify-content-center`}
    >
      <h1>Oops!</h1>
      <div className={styles.errorContent}>
        {isRouteErrorResponse(error) ? (
          <>
            {error.status === 404 && (
              <>
                <h2>404 - Page non trouvée</h2>
                <p>Désolé, la page que vous recherchez n&apos;existe pas.</p>
              </>
            )}
            {error.status === 401 && (
              <>
                <h2>401 - Non autorisé</h2>
                <p>
                  Vous n&apos;avez pas les droits pour accéder à cette page.
                </p>
              </>
            )}
            {error.status === 503 && (
              <>
                <h2>503 - Service indisponible</h2>
                <p>
                  Le service est temporairement indisponible. Veuillez réessayer
                  plus tard.
                </p>
              </>
            )}
            {![404, 401, 503].includes(error.status) && (
              <>
                <h2>Erreur {error.status}</h2>
                <p>{error.statusText}</p>
              </>
            )}
          </>
        ) : (
          <>
            <h2>Une erreur inattendue s&apos;est produite</h2>
            <p>Nous sommes désolés, quelque chose s&apos;est mal passé.</p>
          </>
        )}
        <div className={styles.errorActions}>
          <Link to="/" className="btn btn-primary">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
