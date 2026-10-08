import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.media}>
				<img
					src="/images/hero.jpg"
					alt="Deportivo moderno en carretera al atardecer"
					loading="eager"
				/>
			</div>

			<div className={styles.overlay} aria-hidden="true" />

			<div className={styles.content}>
				<div className={styles.copy}>
					<p className={styles.eyebrow}>
						Carpediem Motors · Costa Rica
					</p>

					<h1 className={styles.title}>
						Puro placer <br /> de conducir
					</h1>
				</div>

				<div className={styles.actions}>
					<Link to="/cars" className={styles.primary}>
						Explorar modelos <span aria-hidden="true">→</span>
					</Link>

					<Link to="/contact" className={styles.secondary}>
						Cotizar mi favorito
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
