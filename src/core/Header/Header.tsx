import { NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'
import { addClass } from '../../utils'
import { useEffect, useState } from 'react'
import { ArrowBigRightDash } from 'lucide-react'
import { USER_LINKS } from '../../constants'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if(isOpen)
      setIsOpen(false)
  }, [pathname])

  return (
    <div className={addClass([styles.header_container, [isOpen, styles.open]])}>
      <ArrowBigRightDash className={styles.menu_toggle} onClick={() => setIsOpen(prev => !prev)} />
      <nav>
        {
          USER_LINKS.map(link =>
            <NavLink
              key={link.to}
              to={link.to}
              className={(state) => addClass([styles.link, [state.isActive, styles.selected]])}
            >{link.title}
            </NavLink>)
        }
        <NavLink to='/sign_up' className={(state) => addClass([styles.link, [state.isActive, styles.selected]])} >Регистрация</NavLink>
      </nav>
    </div>
  )
}

export default Header