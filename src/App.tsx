import './App.sass'
import '@/assets/css/index.sass'
import LayoutMain from './components/Layout/LayoutMain'
import Navbar from './components/Navbar/Navbar'



function App() {

  document.title = 'Ham, Burger'

  return (
    <>
      <LayoutMain>

        <Navbar />


      </LayoutMain>
    </>
  )
}

export default App
