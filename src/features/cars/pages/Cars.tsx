import { useState } from "react";
import cars from "../../../../public/data/Cars.json"
import CarCardList from "../components/CarCardList";
import { SearchBar } from "../../shared/components/SearchBar";
import styles from "./Cars.module.css";
import { Pagination } from "../../shared/components/Pagination";

export const Cars = () => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1)
  };


  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase()),
  );

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 3;
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>Todos los autos</h1>
      <SearchBar search={search} onSearchChange={handleSearchChange} />
      {filteredCars.length > 0 ? (
        <CarCardList cars={currentCars} />
      ) : (
        <p className={styles.empty} role="status">
          No encontramos autos con ese nombre. Prueba con otra búsqueda.
        </p>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={() => setCurrentPage((page) => Math.max(1, page - 1))}
        onNext={() =>
          setCurrentPage((page) => Math.max(1, Math.min(totalPages, page + 1)))
        }
      />
    </main>
  );
};
