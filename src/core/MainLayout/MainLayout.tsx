import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import Header from '../Header/Header'

const MainLayout = () => {
  // todo: тут будет проверка на userId в localStorage и запрос на сервер для получения юзера

  return (
    <div className={styles.main_container}>
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLayout