import { NavLink } from "react-router-dom";
import { Logo } from "../../shared/components/Logo.tsx";
import styles from "./Navbar.module.css";

export const Navbar = () => {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.inner}`}>
				<NavLink to="/" className={styles.brand} aria-label="AutoShop — Inicio">
					<Logo />
				</NavLink>

				<nav className={styles.links} aria-label="Navegación principal">
					<NavLink
						to="/"
						end
						className={({ isActive }) =>
							isActive ? `${styles.link} ${styles.active}` : styles.link
						}
					>
						Inicio
					</NavLink>

					<NavLink
						to="/cars"
						className={({ isActive }) =>
							isActive ? `${styles.link} ${styles.active}` : styles.link
						}
					>
						Autos
					</NavLink>

					<NavLink
						to="/contact"
						className={({ isActive }) =>
							isActive ? `${styles.link} ${styles.active}` : styles.link
						}
					>
						Contacto
					</NavLink>
				</nav>
			</div>
		</header>
	);
};
