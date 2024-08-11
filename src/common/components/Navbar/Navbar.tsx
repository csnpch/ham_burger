import './Navbar.sass'
import { useContext, useEffect, useRef } from 'react'
import { MenuContext } from '@/common/data/context/menuContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { MenuInterface } from '@/common/interface/interface'
import { _class } from '@/common/utils/functions/helper'
import BurgerMenu from './../BurgerMenu/BurgerMenu'
import { menu } from '@/common/data/menu'


export default function Navbar() {

  const menu_context = useContext(MenuContext)

  const menuRef = useRef<Array<HTMLAnchorElement | HTMLDivElement | null>>([]);
  const refNavbar = useRef<HTMLDivElement|null>(null)
  const refBgNavbar = useRef<HTMLDivElement|null>(null)
  const ref_underline = useRef<HTMLDivElement>(null)

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


  const handleScroll = () => {
    const scrollY = window.scrollY

    scrollY < 50
      ? refNavbar.current?.classList.add('top')
      : refNavbar.current?.classList.remove('top')

    scrollY > 400 
      ? refBgNavbar.current?.classList.add('shadow')
      : refBgNavbar.current?.classList.remove('shadow')
  }


  const handleWhell = (event: WheelEvent) => {
    const isUp = event?.deltaY < 0

    if (isUp) {
      refBgNavbar.current?.classList.add('show')
      refNavbar.current?.classList.add('show')
    } else {
      refBgNavbar.current?.classList.remove('show')
      refNavbar.current?.classList.remove('show')
    }
  }
  

  useEffect(() => {
    refNavbar.current?.classList.add('top')
    refBgNavbar.current?.classList.add('show')
    window.addEventListener('wheel', handleWhell)
    window.addEventListener('scroll', handleScroll)
  }, [])


  useEffect(() => {
    moveUnderlineToActiveMenu()
  }, [menu_context.onMenu])


  return (
    <>

      <div className={`navbar-wrapper`}>
        <div 
          ref={refBgNavbar}
          className={`navbar-background`} 
        />
    
        <nav 
          ref={refNavbar}
          className={`navbar-container show`}
        >

          {/* Left content */}
          <div 
            className={`navbar-logo`}
            onClick={() => handleClickMenu(menu[0])}
          >
            <FontAwesomeIcon
              icon={faBurger}
              className={`navbar-logo-icon`}
            />
            <span
              className={`navbar-logo-text`}
            >
              Ham, burger
            </span>
          </div>

          <BurgerMenu />

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
                        ref={(el) => menuRef.current[index] = el}
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
      </div>

    </>
  )

}