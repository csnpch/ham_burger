import './BurgerMenu.sass'
import { useRef, useState } from "react";


interface propsInterface {
  onClick: (state: boolean) => void
}


export default function BurgerMenu({
  onClick
}: propsInterface) {

  const [activeBurgerMenu, setActiveBurgerMenu] = useState<boolean>(false)
  const refLine = useRef<Array<HTMLDivElement | null>>([])

  const handleClickBurgerMenu = () => {
    setActiveBurgerMenu(!activeBurgerMenu)
    refLine.current.forEach((el, _) => {
      el && el.classList.toggle(`active`)
    })

    onClick(activeBurgerMenu)
  }

  return (
    <>
   
      <div 
        onClick={handleClickBurgerMenu}
        className={`burger-menu`}
      >
        <div 
          ref={(el) => refLine.current[0] = el}
          className={`line`} 
        />
        <div 
          ref={(el) => refLine.current[1] = el}
          className={`line`} 
        />
        <div 
          ref={(el) => refLine.current[2] = el}
          className={`line`} 
        />
      </div>
   
    </>
  )

}