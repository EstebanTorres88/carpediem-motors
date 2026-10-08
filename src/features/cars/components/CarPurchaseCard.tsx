import { Link } from "react-router-dom";
import type { Car } from "../types/Car";
import styles from "./CarPurchaseCard.module.css";

interface CardPurchaseProps {
  car: Car;
}

export const CarPurchaseCard = ({ car }: CardPurchaseProps) => {
  return (
    <aside className={styles.card}>
      <p className={styles.label}>Precio de venta</p>

      <h2 className={styles.price}>
        USD {car.price.toLocaleString("es-CR")}
      </h2>

      <p className={styles.description}>
        Precio ilustrativo para este ejercicio académico.
      </p>

      <Link
        className={styles.button}
        to={`/contact?car=${encodeURIComponent(car.name)}`}
      >
        Solicitar información
      </Link>

      {/* <button
      type="button"
      className="purchase-card__button purchase-card__button--favorite"
      aria-pressed={favorite}
      onClick={() => toggleFavorite(car.id)}
    >
      <span className="purchase-card__heart">{favorite ? "♥" : "♡"}</span>
 
      {favorite ? "Guardado en favoritos" : "Guardar en favoritos"}
    </button> */}
    </aside>

  );
};
