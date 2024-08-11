import { useEffect, useRef, useState } from 'react'

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
import FullViewProject, { InterfaceFullViewProject } from './common/components/FullViewProject/FullViewProject'
import { FullViewContext } from './common/data/context/fullViewContext'
import IconTitle from './common/assets/icon/icon_title.ico'


function App() {

  document.title = 'Ham, Burger'
  const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
  link.href = IconTitle


  const refArrowUp = useRef<HTMLDivElement|null>(null)
  const [stateFullPreView, setStateFullPreview] = useState<boolean>(false)
  const [dataFullPreviewProject, setDataFullPreviewProject] = useState<InterfaceFullViewProject|null>(null)


  const handleScroll = () => {
    const y = window.scrollY
    y > 400 
      ? refArrowUp.current?.classList.add('show')
      : refArrowUp.current?.classList.remove('show')
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])


  useEffect(() => {
    document.body.style.overflow = 
      stateFullPreView ? 'hidden' : 'scroll'
  }, [stateFullPreView])
  

  return (
    <>
      <FullViewContext.Provider
        value={{
          onFullView: stateFullPreView,
          setOnFullView: setStateFullPreview,
          dataFullView: dataFullPreviewProject,
          setDataFullPreviewProject: setDataFullPreviewProject
        }}
      >
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

          <FullViewProject
            stateFullView={{
              isOpen: stateFullPreView,
              setOpen: setStateFullPreview
            }}
            title={dataFullPreviewProject?.title || ''}
            subTitle={dataFullPreviewProject?.subTitle || ''}
            description={dataFullPreviewProject?.description || ''}
            img_path={dataFullPreviewProject?.img_path || []}
            tools_used={dataFullPreviewProject?.tools_used || []}
            link={dataFullPreviewProject?.link || '#'}
            link_live_preview={dataFullPreviewProject?.link_live_preview || '#'}
            custom_state_preview={dataFullPreviewProject?.custom_state_preview || ''}
            external_link={dataFullPreviewProject?.external_link || ''}
          />

        </LayoutMain>
      </FullViewContext.Provider>
    </>
  )
}

export default App
