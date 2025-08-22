import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import Header from '../Header/Header'
import useGetToasts from '../Toast/hooks/useGetToasts'
import Toast from '../Toast/Toast'

const MainLayout = () => {
  // todo: тут будет проверка на userId в localStorage и запрос на сервер для получения юзера
  const toasts = useGetToasts()

  return (
    <div className={styles.main_container}>
      <Header />
      <Outlet />
      <div className={styles.toast_container}>
        { toasts.map(toast => <Toast key={toast.id} toast={toast} />) }
      </div>
    </div>
  )
}

export default MainLayout