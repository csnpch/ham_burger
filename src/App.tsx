import { useEffect, useRef } from 'react'

import './App.sass'
import '@/common/assets/css/index.sass'
import Hero from './Sections/Hero/Hero'
import Education from './Sections/Education/Education'
import Experience from './Sections/Experience/Experience'
import ProjectMade from './Sections/ProjectMade/ProjectMade'
import Skill from './Sections/Skill/Skill'
import ContainerBase from '@/common/components/Layout/ContainerBase'
import LayoutMain from '@/common/components/Layout/LayoutMain'
import Navbar from '@/common/components/Navbar/Navbar'
import Mouse from '@/common/components/Animation/Mouse'
import { media_md } from '@/common/utils/functions/mediaQuery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './common/components/Sidebar/Sidebar'



function App() {

  document.title = 'Ham, Burger'

  const refArrowUp = useRef<HTMLDivElement|null>(null)

  const handleScroll = () => {
    const y = window.scrollY
    y > 400 
      ? refArrowUp.current?.classList.add('show')
      : refArrowUp.current?.classList.remove('show')
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  

  return (
    <>

      {
        !media_md() &&
        <Mouse />
      }
      <div 
        ref={refArrowUp} 
        className={`arrow-up`} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FontAwesomeIcon className={`icon`} icon={faChevronUp} />
      </div>
    
      <LayoutMain>
      
        <Sidebar />
        <Navbar />
        <Hero />
        <ContainerBase
          className={`pb-10`}
        >
          <Education />
          <Experience />
          <ProjectMade />
          <Skill />
        </ContainerBase>
      </LayoutMain>
    </>
  )
}

export default App
