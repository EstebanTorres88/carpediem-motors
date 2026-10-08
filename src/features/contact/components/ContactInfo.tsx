import styles from "./ContactInfo.module.css";

export const ContactInfo = () => {
	return (
		<div className={styles.copy}>
			<p className={styles.eyebrow}>Contacto</p>
			<h1 className={styles.title}>Conversemos sobre su próximo auto</h1>
			<p className={styles.text}>
				Complete el formulario para practicar la captura y validación de datos.
				El envío se simula en el navegador: no llega a un vendedor.
			</p>

			<div className={styles.details}>
				<p>
					<strong>Atención</strong>
					Proyecto académico de demostración
				</p>
				<p>
					<strong>Ubicación</strong>
					Costa Rica
				</p>
			</div>
		</div>
	);
};
