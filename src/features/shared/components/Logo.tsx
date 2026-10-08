import styles from "./Logo.module.css";

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<span className={styles.mark}>A</span>
			<span className={styles.word}>
				Carpediem<small>Motors</small>
			</span>
		</div>
	);
};
