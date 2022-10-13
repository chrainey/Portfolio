import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import About from './components/About'


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = '/' element = {<Banner/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/skills' element = {<Skills/>} />
          <Route path = '/projects' element = {<Projects/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
