import { IPokemon } from "../../../../interfaces/interfaces"

// import styles from "./styles.module.scss"

interface Props {
  pokemon: IPokemon | null;
  backgroundSelected: string
}

export const BaseStats = ({}: Props) => {
  return (
    <div>BaseStats</div>
  )
}
