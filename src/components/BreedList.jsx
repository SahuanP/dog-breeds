import { useEffect, useState } from "react";
import styles from "./BreedList.module.css";
import { Link } from "react-router-dom";

const DogAPI_URL =
  "https://api.thedogapi.com/v1/breeds?api_key=live_CYFI0fcNwMxpsfu1eDnHxCAngHfAqbOmkwQMoRTKOnxSbknZSvscntnojahlqGB0";
// const DogImgAPI_URL = "https://images.dog.ceo/breeds/";

export default function BreedList() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   const [breedsImg, setBreedsImg] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch(DogAPI_URL);

        const data = await response.json();

        console.log(data);
        setBreeds(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
      // fetch(DogImgAPI_URL)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //     setBreedsImg(data);
      //   });
    };
    fetchBreeds();
  }, []);

  if (loading) return <p className={styles.loading}>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <section className={styles.breedListContainer}>
        {breeds.map((breed) => {
          return (
            <Link to={`/breed/${breed.id}`} className={styles.link}>
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
