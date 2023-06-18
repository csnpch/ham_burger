import { useState } from 'react'
import { MenuContext } from '@/data/context/menuContext'
import { menuSlug } from '@/interface/type'


interface propsInterface {
  children: React.ReactNode
}


export default function LayoutMain({
  children
}: propsInterface) {

  const [onMenu, setOnMenu] = useState<menuSlug>('home')
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)

  return (
    <>
      <MenuContext.Provider value={{
        onMenu: onMenu,
        setOnMenu: setOnMenu,
        burgerMenu: burgerMenu,
        setBurgerMenu: setBurgerMenu
      }}>

        <div className={`container`}>
          {children}
        </div>

      </MenuContext.Provider>
    </>
  )

}