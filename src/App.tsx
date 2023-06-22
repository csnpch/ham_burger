import './App.sass'
import '@/assets/css/index.sass'
import ContainerBase from './components/Layout/ContainerBase'
import LayoutMain from './components/Layout/LayoutMain'
import Navbar from './components/Navbar/Navbar'
import Hero from './Sections/Hero/Hero'
import Education from './Sections/Education/Education'
import Experience from './Sections/Experience/Experience'
import ProjectMade from './Sections/ProjectMade/ProjectMade'
import Skill from './Sections/Skill/Skill'


function App() {

  document.title = 'Ham, Burger'

  return (
    <>

      <LayoutMain>

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
