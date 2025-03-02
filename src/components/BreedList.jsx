import { useEffect, useState } from "react";
import styles from "./BreedList.module.css";
import { Link } from "react-router-dom";

const DogAPI_URL =
  "https://api.thedogapi.com/v1/breeds?api_key=live_CYFI0fcNwMxpsfu1eDnHxCAngHfAqbOmkwQMoRTKOnxSbknZSvscntnojahlqGB0";
// const DogImgAPI_URL = "https://images.dog.ceo/breeds/";

export default function BreedList() {
  const [breeds, setBreeds] = useState([]);
  //   const [breedsImg, setBreedsImg] = useState([]);

  useEffect(() => {
    fetch(DogAPI_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBreeds(data);
      });
    // fetch(DogImgAPI_URL)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setBreedsImg(data);
    //   });
  }, []);

  return (
    <div>
      <section className={styles.breedListContainer}>
        {breeds.map((breed) => {
          return (
            <Link to={`/breed/${breed.id}`}>
              <div className={styles.BreedCard} key={breed.id}>
                <div className={styles.BreedImgBox}>
                  <img
                    src={breed.image.url}
                    alt="Imagem de um cachorro da raça"
                  />
                </div>

                <div className={styles.BreedInfo}>
                  <h2>{breed.name}</h2>
                  <span>{breed.life_span}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
