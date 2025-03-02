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

        if (!selectedBreed) {
          throw new Error("Raça não encontrada");
        }

        setBreed(selectedBreed);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreed();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!breed) return <p>Dados não encontrados</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Teste para voltar a home</button>
      <h2>{breed.name}</h2>
      <p>{breed.description}</p>
      <p>Expectativa de Vida: {breed.life_span}</p>
      <p>Origem: {breed.origin}</p>
      <img src={breed.image.url} alt="Imagem de um cachorro da raça" />
    </div>
  );
}
