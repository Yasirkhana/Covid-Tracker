import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './Home'
import Service from './Service'
import Contact from './Contact'
import About from './About'

import { Link } from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
              
        <nav>
            <Link To="/">HOME</Link>
            <Link To="/about">ABOUT</Link>
            <Link To="/service">SERVICE</Link>
            <Link To="/contact">CONTACT</Link>
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