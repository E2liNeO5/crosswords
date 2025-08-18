import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import SidebarMenu from '../../shared/SidebarMenu/SidebarMenu'

const MainLayout = () => {
  return (
    <div className={styles.main_container}>
      <SidebarMenu />
      <Outlet />
    </div>
  )
}

export default MainLayout