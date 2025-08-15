import './App.css'
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Footer from './components/footer'
import Projects from './components/project'
import Contact from './components/contact'
import New_skills from './components/new_Skills'
function App() {
  return <>
  <Header></Header>
  <div className='home'>
    <section id="home"><Home></Home></section>
    <section id ="about"><About></About></section>
    <section id="skills"><New_skills></New_skills></section>
    <section id ="projects"> <Projects></Projects></section>
    <section id ="contact"> <Contact></Contact></section>
  </div>
  <Footer></Footer>
  </>
}

export default App
