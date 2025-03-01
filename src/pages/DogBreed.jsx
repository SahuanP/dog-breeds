import React from "react";
import styles from "./DogBreed.module.css";

export default function DogBreed() {
  return (
    <div>
      <div className={styles.BreedCard}>
        <img src="#" alt="Imagem de um cachorro da raça" />

        <div className={styles.BreedInfo}>
          <h2>Raça do Cão</h2>
          <span>Breve descrição da raça</span>
        </div>
      </div>
    </div>
  );
}
