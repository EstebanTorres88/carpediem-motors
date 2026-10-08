import type { Car } from "../types/Car";
import styles from "./CarCardList.module.css";
import { CardCar } from "./CardCar";

interface CardListProps {
	cars: Car[];
}

const CarCardList = ({ cars }: CardListProps) => {
	return (
		<div className={styles.grid}>
			{cars.map((car) => (
				<CardCar key={car.id} car={car} />
			))}
		</div>
	);
};

export default CarCardList;
