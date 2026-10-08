import styles from "./Pagination.module.css";

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPrevious: () => void;
	onNext: () => void;
};

export const Pagination = ({
	currentPage,
	totalPages,
	onPrevious,
	onNext,
}: PaginationProps) => {
	return (
		<nav className={styles.nav} aria-label="Paginación del catálogo">
			<button
				type="button"
				className={styles.button}
				onClick={onPrevious}
				disabled={currentPage <= 1}
			>
				<span aria-hidden="true">←</span>
				Anterior
			</button>

			<span className={styles.status} aria-live="polite" aria-atomic="true">
				Página <strong>{currentPage}</strong> de {totalPages}
			</span>

			<button
				type="button"
				className={styles.button}
				onClick={onNext}
				disabled={currentPage >= totalPages}
			>
				Siguiente
				<span aria-hidden="true">→</span>
			</button>
		</nav>
	);
};
