import './Sidebar.sass'
import { useEffect, useRef } from 'react'
import { menu } from '@/common/data/menu'
import { menuSlug } from '@/common/interface/type'
import { useContext } from 'react'
import { MenuContext } from '@/common/data/context/menuContext'

export default function Sidebar() {

  const refSidebar = useRef<HTMLDivElement|null>(null)
  const menu_context = useContext(MenuContext)

  const handleClickMenu = (menuSlug: menuSlug) => {
    refSidebar.current?.classList.remove('active')
    menu_context.setOnMenu(menuSlug)
    menu_context.setBurgerMenu(false)
  }

  useEffect(() => {

    menu_context.burgerMenu 
      ? refSidebar.current?.classList.add('active')
      : refSidebar.current?.classList.remove('active')

  }, [menu_context.burgerMenu])


  return (
    <>

      <div 
        ref={refSidebar}
        className='sidebar-container'
      >
        {
          menu.map((item, index) => (
            <div
              key={index}
              className='item'
              onClick={() => handleClickMenu(item.slug)}
            >
              { item.name }
            </div>
          ))
        }
      </div>

    </>
  )

}