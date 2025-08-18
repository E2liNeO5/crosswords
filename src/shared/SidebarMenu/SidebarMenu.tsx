import { NavLink } from 'react-router-dom'
import styles from './SidebarMenu.module.scss'
import { addClass } from '../../core/utils'
import { useState } from 'react'
import { ArrowBigRightDash } from 'lucide-react'

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={addClass([styles.side_bar_container, [isOpen, styles.open]])}>
      <ArrowBigRightDash className={styles.menu_toggle} onClick={() => setIsOpen(prev => !prev)} />
      <nav>
        <NavLink to='/' className={(isActive) => addClass([styles.link, [!!isActive, styles.selected]])} >Главная</NavLink>
        <NavLink to='/another' className={linkState => addClass([styles.link, [linkState.isActive, styles.selected]])} >Ещё одна ссылка</NavLink>
      </nav>
    </div>
  )
}

export default SidebarMenu