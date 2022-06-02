import React from 'react'
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom'
import Home from './Home'
import Service from './Service'
import Contact from './Contact'
import About from './About'


function App() {
  return (
    <div>
      <Router>
              
        <nav>
            <Link to="/">HOME</Link> {"     "}
            <Link to="/about">ABOUT</Link>  {"    "}
            <Link to="/service">SERVICE</Link>  {"    "}
            <Link to="/contact">CONTACT</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App