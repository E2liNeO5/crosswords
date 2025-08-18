import { useMemo } from 'react'
import { addClass } from '../../../../core/utils'
import styles from './CrosswordItem.module.scss'
import { DIFFICULTIES } from '../../../../constants'

type TItem = {
  author: string
  difficultyId: number
  letters: string
}

type Props = {
  item: TItem
}

const CrosswordItem = ({ item }: Props) => {
  const difficulty = useMemo(() => DIFFICULTIES.find(d => d.id === item.difficultyId), [])

  return (
    <div className={addClass([styles.crossword_item_container, styles[difficulty?.classValue || '']])}>
      <div className={styles.difficulty}>
        Сложность: <span className={styles[difficulty?.classValue || '']}>{ difficulty?.name }</span>
      </div>
      <div className={styles.letters_container}>
        Набор букв: { item.letters }
      </div>
      <div className={styles.author}>
        Автор: { item.author }
      </div>
    </div>
  )
}

export default CrosswordItem