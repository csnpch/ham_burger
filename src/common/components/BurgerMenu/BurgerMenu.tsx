import './BurgerMenu.sass'
import { MenuContext } from '@/common/data/context/menuContext';
import { useRef, useContext } from "react";
import { _class } from '@/common/utils/functions/helper';



export default function BurgerMenu() {

  const refLine = useRef<Array<HTMLDivElement | null>>([])
  const menu_context = useContext(MenuContext) 

  const handleClickBurgerMenu = () => {
    menu_context.setBurgerMenu(!menu_context.burgerMenu)
  }

  return (
    <>
   
      <div 
        onClick={handleClickBurgerMenu}
        className={`burger-menu`}
      >
        <div 
          ref={(el) => refLine.current[0] = el}
          className={_class(`
            line
            ${menu_context.burgerMenu && 'active'}
          `)} 
        />
        <div 
          ref={(el) => refLine.current[1] = el}
          className={_class(`
            line
            ${menu_context.burgerMenu && 'active'}
          `)} 
        />
        <div 
          ref={(el) => refLine.current[2] = el}
          className={_class(`
            line
            ${menu_context.burgerMenu && 'active'}
          `)} 
        />
      </div>
   
    </>
  )

}