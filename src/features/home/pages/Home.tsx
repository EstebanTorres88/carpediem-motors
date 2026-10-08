import { Link } from "react-router-dom";
import Cars from "../../../../public/data/Cars.json";
import CarCardList from "../../cars/components/CarCardList";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import styles from "./Home.module.css";

export const Home = () => {
	const featuredCars = Cars.filter((car) => car.featured).slice(0, 3);
	return (
		<main>
			<Hero />

			<section className={styles.featured}>
				<div className={styles.header}>
					<div>
						<p className={styles.eyebrow}>Selección destacada</p>

						<h2 className={styles.title}>Conozca la colección</h2>
					</div>

					<Link to="/cars" className={styles.link}>
						Ver todos los autos →
					</Link>
				</div>

				<CarCardList cars={featuredCars}></CarCardList>

				<Experience />
			</section>
		</main>
	);
};
