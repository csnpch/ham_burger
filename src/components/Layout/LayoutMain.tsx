import './LayoutMain.sass'
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

  return (
    <>
      <MenuContext.Provider value={{
        onMenu: onMenu,
        setOnMenu: setOnMenu
      }}>

        <div className={`container`}>
          {children}
        </div>

      </MenuContext.Provider>
    </>
  )

}