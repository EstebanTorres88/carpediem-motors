import { Link } from "react-router-dom";
import styles from "./Experience.module.css";

const Experience = () => {
	return (
		<section className={styles.section}>
			<div className={`container ${styles.grid}`}>
				<div className={styles.media}>
					<img
						src="/images/suv.jpg"
						alt="SUV moderno en exhibición"
						loading="lazy"
					/>
					<span className={styles.tag}>Showroom · San José</span>
				</div>

				<div>
					<p className={styles.eyebrow}>Explore con calma</p>
					<h2 className={styles.title}>Su próximo camino empieza aquí</h2>

					<p className={styles.text}>
						Compare modelos, revise autonomía y potencia, y solicite información
						desde la ficha de cada auto.
					</p>

					<ul className={styles.checkList}>
						<li>Catálogo fácil de explorar</li>
						<li>Precio y specs claras</li>
						<li>Cotización desde cada ficha</li>
					</ul>

					<Link className={styles.link} to="/contact">
						Consultar un modelo →
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Experience;
