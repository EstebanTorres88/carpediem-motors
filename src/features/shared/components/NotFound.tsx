import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export const NotFound = () => {
	return (
		<section aria-labelledby="not-found-title" className={styles.section}>
			<span aria-hidden="true" className={styles.code}>
				404
			</span>

			<p className={styles.kicker}>Error 404 · Fuera de ruta</p>

			<h1 id="not-found-title" className={styles.title}>
				Esta página no existe
			</h1>

			<p className={styles.text}>
				La dirección puede haber cambiado o estar escrita incorrectamente.
				Retoma el camino y descubre tu próximo auto.
			</p>

			<div className={styles.actions}>
				<Link to="/" className={styles.primary}>
					Volver al inicio
				</Link>

				<Link to="/cars" className={styles.secondary}>
					Explorar colección <span aria-hidden="true">→</span>
				</Link>
			</div>
		</section>
	);
};
