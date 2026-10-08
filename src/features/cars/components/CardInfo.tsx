import type { Car } from "../types/Car";
import styles from "./CardInfo.module.css";
import { CarFeature } from "./CarFeature";

interface CarInfoProps {
	car: Car;
}

export const CardInfo = ({ car }: CarInfoProps) => {
	return (
		<section className={styles.info}>
			<p className={styles.location}>{car.location}</p>

			<h1 className={styles.name}>{car.name}</h1>

			<div className={styles.specs}>
				<span>
					<strong>{car.year}</strong> año
				</span>

				<span>
					<strong>{car.mileage.toLocaleString("es-CR")}</strong> km
				</span>

				<span>
					<strong>{car.seats}</strong> pasajeros
				</span>
			</div>

			<h2 className={styles.subtitle}>Descripción</h2>

			<p className={styles.description}>{car.description}</p>

			<CarFeature features={car.features} />
		</section>
	);
};
