import { ContactForm } from "../components/ContactForm";
import { ContactInfo } from "../components/ContactInfo";
import styles from "./Contact.module.css";

export const Contact = () => {
	return (
		<section className={`container ${styles.page}`}>
			<ContactInfo />
			<ContactForm />
		</section>
	);
};
