import type { Car } from "../types/Car";
import styles from "./CarHero.module.css";

interface CarHeroProps {
	car: Car;
}

export const CarHero = ({ car }: CarHeroProps) => {
	return (
		<div className={styles.hero}>
			<img src={car.image} alt={`Ilustración de ${car.name}`} />
		</div>
	);
};
