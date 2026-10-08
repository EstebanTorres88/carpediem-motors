import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import styles from "./Footer.module.css";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`container ${styles.grid}`}>
				<div className={styles.about}>
					<Logo />

					<p>Catálogo académico de autos para aprender React y Capacitor.</p>
				</div>

				<nav aria-label="Enlaces del pie de página">
					<h3>Explorar</h3>

					<Link to="/cars">Autos</Link>

					<Link to="/contact">Contacto</Link>
				</nav>

				<div>
					<h3>Proyecto</h3>
					<p>Ejemplo de enseñanza</p>
					<p>Costa Rica</p>
				</div>
			</div>

			<p className={`container ${styles.copyright}`}>
				© {new Date().getFullYear()} Carpediem Motors · Proyecto académico
			</p>
		</footer>
	);
};
