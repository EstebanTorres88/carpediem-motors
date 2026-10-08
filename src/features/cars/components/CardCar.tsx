import { Link } from "react-router-dom";
import type { Car } from "../types/Car";
import styles from "./CardCar.module.css";

interface CardCarProps {
	car: Car;
}
export const CardCar = ({ car }: CardCarProps) => {
	return (
		<article className={styles.card}>
			<div className={styles.media}>
				<img src={car.image} alt={`Ilustración de ${car.name}`} />

				<span className={styles.badge}>{car.type}</span>
				<span className={styles.fav} aria-hidden="true">
					♡
				</span>
			</div>

			<div className={styles.body}>
				<p className={styles.location}>{car.location}</p>
				<h3 className={styles.name}>{car.name}</h3>

				<div className={styles.meta}>
					<span>{car.year}</span>

					<span>{car.mileage.toLocaleString("es-CR")} km</span>

					<span>{car.seats} pasajeros</span>
				</div>

				<div className={styles.footer}>
					<strong className={styles.price}>
						USD {car.price.toLocaleString("es-CR")}
					</strong>

					<Link to={`/cars/${car.id}`} className={styles.detail}>
						Ver detalle →
					</Link>
				</div>
			</div>
		</article>
	);
};
