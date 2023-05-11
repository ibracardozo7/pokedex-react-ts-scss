import { createContext, useState } from "react";
import { AllPokemonsResult, PokeType } from "../interfaces/types";
import axios from "axios"

interface ContextProps {
  types: PokeType[]
  filterSelected: PokeType
  pokemonsFiltered: string[] | null
  changeTypeSelected: (type: PokeType) => void
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps)

const PokemonProvider = ({ children } : any) => {
  let allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0"

  const defaultState: PokeType = {
    name: "All",
    url: allPokemonsUrl
  }

  const [allPokemons, setAllPokemons] = useState(null)
  const [pokemonsFiltered, setPokemonsFiltered] = useState(null)
  
  const [types, setTypes] = useState(defaultState)
  const [filterSelected, setFilterSelected] = useState(defaultState)

  const getAllPokemons = async () => {
    const { data } = await axios.get(allPokemonsUrl)

    let pokemons = data?.results?.map(
      (poke: AllPokemonsResult) => poke?.url)
  }

  return (
    <PokemonContext.Provider value={}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider