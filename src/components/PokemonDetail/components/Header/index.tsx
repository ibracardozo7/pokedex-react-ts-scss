import { IPokemon } from '../../../../interfaces/interfaces'
import { PokeballIconBig } from '../../../../assets/pokeball'
import { useNavigate } from 'react-router-dom'

import styles from "./styles.module.scss"
import { ArrowLeftIcon } from '../../../../assets/arrows'

interface Props {
  pokemon: IPokemon | null
}

export const Header = ({pokemon}: Props) => {
  const navigate = useNavigate();

  return (
    <header>
      <PokeballIconBig className={styles.pokeball} />
      <div className={styles.left}>
        <ArrowLeftIcon onclick={() => navigate(-1)} />
        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </header>
  )
}
