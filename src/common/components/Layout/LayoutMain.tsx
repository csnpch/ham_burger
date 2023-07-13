import { useEffect, useRef, useState } from 'react'
import { MenuContext } from '@/common/data/context/menuContext'
import { menuSlug } from '@/common/interface/type'


interface propsInterface {
  children: React.ReactNode
}


export default function LayoutMain({
  children
}: propsInterface) {

  const [onMenu, setOnMenu] = useState<menuSlug>('home')
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
  const ref = useRef(null)


  const scrollTo = (section: HTMLElement | null) => {
    window.scrollTo({
      top: section?.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (slug: menuSlug) => {
  
    if (!ref.current) return
    
    const sections = {
      hero: document.getElementById('hero'),
      education: document.getElementById('education'),
      experience: document.getElementById('experience'),
      projectMade: document.getElementById('project-made'),
      skill: document.getElementById('skill'),
    }
    
    if (slug === 'home')
      scrollTo(sections.hero)
    else if (slug === 'education')
      scrollTo(sections.education)
    else if (slug === 'experience')
      scrollTo(sections.experience)
    else if (slug === 'projects')
      scrollTo(sections.projectMade)
    else if (slug === 'skills')
      scrollTo(sections.skill)

  }

  useEffect(() => {
    scrollToSection(onMenu)
  }, [onMenu])


  return (
    <>
      <MenuContext.Provider value={{
        onMenu: onMenu,
        setOnMenu: setOnMenu,
        burgerMenu: burgerMenu,
        setBurgerMenu: setBurgerMenu
      }}>

        <div 
          ref={ref}
          className={`container`}
        >
          {children}
        </div>

      </MenuContext.Provider>
    </>
  )

}