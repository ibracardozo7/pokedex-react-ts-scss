import { useParams } from "react-router-dom"
import { usePokemon } from "../../hooks/usePokemon";
import { PokemonDetail } from "../../components/PokemonDetail";

export const PokeDetail = () => {
  const {pokeId} = useParams()
  console.log(pokeId);
  
  const {pokemon} = usePokemon("", pokeId)
  console.log(pokemon);
  
  return <PokemonDetail pokemon={pokemon!} />
}

// export default PokeDetail