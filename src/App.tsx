import './App.sass'
import '@/assets/css/index.sass'
import ContainerBase from './components/Layout/ContainerBase'
import LayoutMain from './components/Layout/LayoutMain'
import Navbar from './components/Navbar/Navbar'
import Hero from './Sections/Hero/Hero'
import Education from './Sections/Education/Education'
import Experience from './Sections/Experience/Experience'
import ProjectMade from './Sections/ProjectMade/ProjectMade'



function App() {

  document.title = 'Ham, Burger'

  return (
    <>
      <LayoutMain>

        <Navbar />
        <Hero />

        <ContainerBase>

          <Education />
          <Experience />
          <ProjectMade />
          
          {
            [0,1,2,3,4,5,6,7,8,9,1,2,3,4].map(item => (
              <br key={item} />
            ))
          }
          
        </ContainerBase>


      </LayoutMain>
    </>
  )
}

export default App
