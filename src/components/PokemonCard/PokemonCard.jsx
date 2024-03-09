import { useEffect } from "react";
import styles from "./PokemonCard.module.css";
import axios from "axios";
import { useState } from "react";

const PokemonCard = ({ url, name }) => {
  const [data, setData] = useState(null);
  const getPokemonImage = async () => {
    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        console.log(res.data);
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonImage();
  }, []);

  if (data) {
    return (
      <div className={styles.main}>
        <img className={styles.image} src={data.sprites.other.dream_world.front_default} alt="" />
        <p>{name}</p>
      </div>
    );
  }
};

export default PokemonCard;
