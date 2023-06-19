import './App.sass'
import '@/assets/css/index.sass'
import LayoutMain from './components/Layout/LayoutMain'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Sections/Hero/Hero'
import ContainerBase from './components/Layout/ContainerBase'
import Education from './components/Sections/Education/Education'
import Experience from './components/Sections/Experience/Experience'



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
          <br />
          <br />
          <br />
          <br />
          
        </ContainerBase>


      </LayoutMain>
    </>
  )
}

export default App
