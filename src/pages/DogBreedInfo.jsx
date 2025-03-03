import { useEffect, useState } from "react";
import styles from "./DogBreedInfo.module.css";
import { useNavigate, useParams } from "react-router-dom";

const DogAPI_URL =
  "https://api.thedogapi.com/v1/breeds?api_key=live_CYFI0fcNwMxpsfu1eDnHxCAngHfAqbOmkwQMoRTKOnxSbknZSvscntnojahlqGB0";

export default function DogBreedInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBreed = async () => {
      try {
        const response = await fetch(DogAPI_URL);

        const data = await response.json();
        const selectedBreed = data.find((breed) => breed.id.toString() === id);
        console.log(selectedBreed);

        setBreed(selectedBreed);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreed();
  }, [id]);

  if (loading) return <p className={styles.loading}>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!breed) return <p>Dados não encontrados</p>;

  return (
    <div>
      <section className={styles.main}>
        <button onClick={() => navigate(-1)}>Voltar a listagem de raças</button>
        <div className={styles.mainBreedContent}>
          <h2>{breed.name}</h2>
          <p>
            <strong>Bred for:</strong> {breed.bred_for}
          </p>
          <p>
            <strong>Breed Group:</strong> {breed.breed_group}
          </p>
          <p>
            <strong>Expectativa de Vida:</strong> {breed.life_span}
          </p>
          <p>
            <strong>Temperament:</strong> {breed.temperament}
          </p>

          <div className={styles.imgBox}>
            <img src={breed.image.url} alt="Imagem de um cachorro da raça" />
          </div>
        </div>
      </section>
    </div>
  );
}
