import './App.css'
import { Arrow } from './components/Arrow/Arrow'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { HeroSeccion } from './components/HeroSeccion/HeroSeccion'
import { MyBlog } from './components/MyBlog/MyBlog'
import { NavBar } from './components/Navbar/NavBar'
import { Projects } from './components/Projects/Projects'
import { Technologies } from './components/Technologies/Technologies'


function App() {
  return (
    <>
      <NavBar />
      <HeroSeccion />
      <Arrow />
      <Experience />
      <Projects />
      <Technologies />
      <MyBlog />
      <Contact />
    </>
  )
}

export default App
