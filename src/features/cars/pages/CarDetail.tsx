import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../shared/hooks/useFetch";
import { CardInfo } from "../components/CardInfo";
import { CarHero } from "../components/CarHero";
import { CarPurchaseCard } from "../components/CarPurchaseCard";
import type { Car } from "../types/Car";
import styles from "./CarDetail.module.css";

export const CarDetail = () => {
	const { id } = useParams<{ id: string }>();

	const { data: cars, isLoading, error } = useFetch<Car[]>("/data/Cars.json");

	const car = cars?.find((item) => item.id === Number(id));

	if (isLoading) {
		return <p className={styles.status}>Cargando vehículo...</p>;
	}

	if (error) {
		return (
			<p role="alert" className={`${styles.status} ${styles.error}`}>
				{error}
			</p>
		);
	}

	if (!car) {
		return (
			<section className={styles.empty}>
				<h1>Vehículo no encontrado</h1>

				<Link className={styles.link} to="/cars">
					Volver al catálogo
				</Link>
			</section>
		);
	}

	return (
		<article className={styles.page}>
			<div className={`container ${styles.topbar}`}>
				<Link className={styles.back} to="/cars">
					← Volver a autos
				</Link>
			</div>
			<CarHero car={car} />
			<div className={`container ${styles.grid}`}>
				<CardInfo car={car} />
				<CarPurchaseCard car={car} />
			</div>
		</article>
	);
};
