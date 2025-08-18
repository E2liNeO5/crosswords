import styles from './Crosswords.module.scss'
import CrosswordItem from './components/CrosswordItem/CrosswordItem'

const ITEMS = [
  {
    author: 'Egor',
    difficultyId: 1,
    letters: 'а, б, в, г'
  },
  {
    author: 'Petya',
    difficultyId: 2,
    letters: 'а, б, в, г'
  },
  {
    author: 'Maxim',
    difficultyId: 3,
    letters: 'а, б, в, г'
  },
  {
    author: 'Ivan',
    difficultyId: 4,
    letters: 'а, б, в, г'
  }
]

const Crosswords = () => {
  return (
    <div className={styles.crosswords_container}>
      { ITEMS.map(item => <CrosswordItem key={item.author} item={item} />) }
    </div>
  )
}

export default Crosswords