import './App.sass'
import '@/assets/css/index.sass'
import LayoutMain from './components/Layout/LayoutMain'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ContainerBase from './components/Layout/ContainerBase'
import Education from './components/Education/Education'



function App() {

  document.title = 'Ham, Burger'

  return (
    <>
      <LayoutMain>

        <Navbar />
        <Hero />

        <ContainerBase>

          <Education />
          
        </ContainerBase>


      </LayoutMain>
    </>
  )
}

export default App
