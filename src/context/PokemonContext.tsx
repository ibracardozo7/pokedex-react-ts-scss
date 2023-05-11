import { createContext, useState, useEffect } from "react";
import { AllPokemonsResult, PokeType, PokemonsByTypeResult } from "../interfaces/types";
import axios from "axios";

interface ContextProps {
  types: PokeType[];
  filterSelected: PokeType;
  pokemonsFiltered: string[] | null;
  changeTypeSelected: (type: PokeType) => void;
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {
  let allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

  const defaultState: PokeType = {
    name: "All",
    url: allPokemonsUrl,
  };

  const [allPokemons, setAllPokemons] = useState(null);
  const [pokemonsFiltered, setPokemonsFiltered] = useState(null);

  const [types, setTypes] = useState([defaultState]);
  const [filterSelected, setFilterSelected] = useState(defaultState);

  const changeTypeSelected = async (type: PokeType) => {
    setFilterSelected(type)

    const { data } = await axios.get(type?.url!)
    console.log("asd", data);
    let pokemons = data?.pokemon?.map(
      ({ pokemon }: PokemonsByTypeResult) => pokemon?.url)

    type.name !== "All"
    ? setPokemonsFiltered(pokemons)
    : setPokemonsFiltered(allPokemons)
    
  }

  const getPokemonsTypes = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type")
    console.log("types-->", data);
    setTypes([...types, ...data.results])
  }

  const getAllPokemons = async () => {
    const { data } = await axios.get(allPokemonsUrl);
    console.log("data-->", data);

    let pokemons = data?.results?.map((poke: AllPokemonsResult) => poke?.url);
    // console.log("poke", pokemons);

    setAllPokemons(pokemons);
    setPokemonsFiltered(pokemons);
  };

  useEffect(() => {
    getAllPokemons()
    getPokemonsTypes()
    // changeTypeSelected()
  },[])

  return (
    <PokemonContext.Provider
      value={{
        types,
        filterSelected,
        pokemonsFiltered,
        changeTypeSelected,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
