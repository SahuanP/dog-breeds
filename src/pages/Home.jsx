import React from "react";
import styles from "./Home.module.css";
import BreedList from "../components/BreedList";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <h1>App Raças de Cachorros</h1>
      </div>

      <BreedList />
    </div>
  );
}
