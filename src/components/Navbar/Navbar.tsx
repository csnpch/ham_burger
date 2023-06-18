import './Navbar.sass'
import { useContext, useEffect, useRef } from 'react'
import { MenuContext } from '@/data/context/menuContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { MenuInterface } from '@/interface/interface'
import { _class } from '@/utils/functions/helper'
import BurgerMenu from '../BurgerMenu/BurgerMenu'


export default function Navbar() {

  const menu_context = useContext(MenuContext)

  const menuRef = useRef<Array<HTMLAnchorElement | HTMLDivElement | null>>([]);
  const ref_underline = useRef<HTMLDivElement>(null)

  const menu: MenuInterface[] = [
    { name: 'Home', path: '#home', slug: 'home' },
    { name: 'Education', path: '#education', slug: 'education' },
    { name: 'Experience', path: '#experience', slug: 'experience' },
    { name: 'Projects', path: '#projects', slug: 'projects' },
    { name: 'Skills', path: '#skills', slug: 'skills' },
  ]


  const handleClickMenu = (item: MenuInterface) => {
    menu_context.setOnMenu(item.slug)
  }


  const moveUnderlineToActiveMenu = () => {
    const activeMenuIndex = menu.findIndex(item => item.slug === menu_context.onMenu)
    const active_menu = menuRef.current[activeMenuIndex]

    if (active_menu && active_menu.offsetParent) {
      const underline = active_menu.offsetParent.querySelector('.navbar-menu-underline') as HTMLElement
      underline.style.left = `${active_menu.offsetLeft}px`
      underline.style.width = `12px`
      underline.style.opacity = '0.2'
      setTimeout(() => {
        underline.style.opacity = '1'
        underline.style.width = `${active_menu.offsetWidth}px`
      }, 100)
    }
  }


  useEffect(() => {
    moveUnderlineToActiveMenu()
  }, [menu_context.onMenu])



  return (
    <>
      <nav className={`navbar-container`}>

        {/* Left content */}
        <div className={`navbar-logo`}>
          <FontAwesomeIcon
            icon={faBurger}
            className={`navbar-logo-icon`}
          />
          <span
            className={`navbar-logo-text`}
          >
            HAM, BUGER
          </span>
        </div>


        {/* Right content */}
        <div className={`navbar-menu`}>
          {/* underline white of menu */}
          <div
            ref={ref_underline}
            className={`navbar-menu-underline`}
          />

          <ul className={`navbar-menu-group`}>
            {
              menu.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`navbar-menu-item`}
                    onClick={() => handleClickMenu(item)}
                  >
                    <div
                      ref={(element) => menuRef.current[index] = element}
                      className={_class(`
                        cursor-pointer
                        navbar-menu-item-name${menu_context.onMenu === item.slug ? ':active' : ''}
                      `)}
                    >
                      {item.name}
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>

      </nav>
    </>
  )

}