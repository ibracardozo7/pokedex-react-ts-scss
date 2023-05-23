import { useContext } from "react";
import { PokeballIconSmall } from "../../assets/pokeball";
import { PokemonList } from "../../components/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";

import styles from "./styles.module.scss";
import { Filters } from "../../components/Filters";

export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome} = usePagination();

  let perPage = 12;
  return (
    <div className={styles.home}>
      <header>
        <div onClick={backToHome}>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <Filters />
      <PokemonList pokemonsUrl={pokemonsFiltered} page={page} perPage={perPage} />
      <Pagination
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItem={pokemonsFiltered?.length!}
      />
    </div>
  );
};

// export default Home
