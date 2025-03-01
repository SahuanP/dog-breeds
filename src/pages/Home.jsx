import React from "react";
import styles from "./Home.module.css";
import DogBreed from "./DogBreed";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <h1>App Raças de Cachorros</h1>
      </div>

      <div className={styles.BreedContentBox}>
        <DogBreed />
        <DogBreed />
        <DogBreed />
        <DogBreed />
        <DogBreed />
        <DogBreed />
        <DogBreed />
        <DogBreed />
      </div>
    </div>
  );
}
