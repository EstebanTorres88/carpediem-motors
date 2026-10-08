import styles from "./SearchBar.module.css";

type SearchBarProps = {
	search: string;
	onSearchChange: (value: string) => void;
};

export const SearchBar = ({ search, onSearchChange }: SearchBarProps) => {
	return (
		<label className={styles.bar}>
			<span className={styles.label}>Encuentra tu próximo auto</span>
			<span className={styles.field}>
				<svg
					className={styles.icon}
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					aria-hidden="true"
				>
					<circle cx="10.5" cy="10.5" r="6.5" />
					<path d="m16 16 4.5 4.5" />
				</svg>
				<input
					className={styles.input}
					type="search"
					placeholder="Buscar auto por nombre..."
					value={search}
					onChange={(e) => onSearchChange(e.target.value)}
				/>
			</span>
		</label>
	);
};
