import './App.css'
import Header from './component/header'
import Home from './component/home'
import About from './component/about'
import Footer from './component/footer'
import Projects from './component/project'
import Contact from './component/contact'
import New_skills from './component/new_Skills'
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
