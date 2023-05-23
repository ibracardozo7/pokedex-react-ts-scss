import styles from "./styles.module.scss"

interface Props {
  perPage: number;
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  maxItem: number;
}

export const Pagination = ({
  perPage,
  page,
  nextPage,
  previousPage,
  maxItem
}: Props) => {

  const lastPage = Math.ceil(maxItem / perPage);

  return (
    <div className={styles.pagination}>
      <button disabled={page ===  1} onClick={previousPage}>
        &lt;
      </button>
      <span>{page} / {lastPage}</span>
      <button disabled={page === lastPage} onClick={nextPage}>
        &gt;
      </button>
    </div>
  )
}
