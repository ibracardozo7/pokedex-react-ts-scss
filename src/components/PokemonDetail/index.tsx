import { IPokemon } from "../../interfaces/interfaces";
import { background } from "../../utils/BackgroundsByType";
import { Loader } from "../Loader";
import { Header } from "./components/Header";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}
export const PokemonDetail = ({ pokemon }: Props) => {
  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  if (!pokemon) {
    return (
      <div
        style={{ background: backgroundSelected }}
        className={styles.loadingContainer}
      >
        <Loader color="#fff" size={50} />
      </div>
    );
  }

  return (
    <div style={{background: backgroundSelected}} className={styles.bg}>
      <Header pokemon={pokemon} />
      <div className={styles.info}>
        <img
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
        />
        {/* <PokeTypes pokemon={pokemon} /> */}
        {/* <Title content="About" backgroundSelected={backgroundSelected} /> */}
        {/* <Stats pokemon={pokemon} /> */}
        {/* <Title content="Base Stats" backgroundSelected={backgroundSelected} /> */}
        {/* <BaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} /> */}
      </div>
    </div>
  )
};
