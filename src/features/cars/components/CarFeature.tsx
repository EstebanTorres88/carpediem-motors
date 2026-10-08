import styles from "./CarFeature.module.css";

interface CarFeatureProps {
	features: string[];
}

export const CarFeature = ({ features }: CarFeatureProps) => {
	return (
		<>
			<h2 className={styles.title}>Características</h2>

			<ul className={styles.list}>
				{features.map((feature) => (
					<li key={feature} className={styles.item}>{feature}</li>
				))}
			</ul>
		</>
	);
};
