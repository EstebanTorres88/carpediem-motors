import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import styles from "./ContactForm.module.css";

type ContactForm = {
	name: string;
	email: string;
	phone: string;
	car: string;
	message: string;
};

export const ContactForm = () => {
	const [searchParams] = useSearchParams();
	const carName = searchParams.get("car") ?? "";
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactForm>({
		defaultValues: {
			car: carName,
		},
	});

	function onSubmit(data: ContactForm) {
		console.log(data);
	}

	return (
		<main className={styles.form}>
			<h1 className={styles.title}>Contacto</h1>
			<p className={styles.subtitle}>
				Complete el formulario y nos pondremos en contacto con usted.
			</p>

			<form onSubmit={handleSubmit(onSubmit)} className={styles.grid}>
				<div className={styles.field}>
					<label htmlFor="name">Nombre completo</label>
					<input
						id="name"
						type="text"
						placeholder="Digite su nombre"
						{...register("name", { required: true })}
					/>
					{errors.name && (
						<span className={styles.error}>El nombre es obligatorio</span>
					)}
				</div>

				<div className={styles.field}>
					<label htmlFor="email">Correo electrónico</label>
					<input
						id="email"
						type="email"
						placeholder="correo@ejemplo.com"
						{...register("email")}
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="phone">Teléfono</label>
					<input
						id="phone"
						type="tel"
						placeholder="8888-8888"
						{...register("phone")}
					/>
				</div>

				<div className={styles.field}>
					<label htmlFor="car">Auto de interés</label>
					<input
						id="car"
						type="text"
						placeholder="Seleccione un auto"
						{...register("car")}
					/>
				</div>

				<div className={`${styles.field} ${styles.wide}`}>
					<label htmlFor="message">Mensaje</label>
					<textarea
						id="message"
						placeholder="Cuéntenos qué desea saber..."
						rows={5}
						{...register("message")}
					/>
				</div>

				<button className={styles.submit} type="submit">
					Registrar consulta
				</button>
			</form>
		</main>
	);
};
