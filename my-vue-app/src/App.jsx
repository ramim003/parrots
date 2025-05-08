import { useState } from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Ourservice from './pages/Ourservice'
import About from './pages/About'

import Review from './pages/Review'
import Faculty from './pages/Faculty'
import ContactUs from './pages/ContactUs'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
 
   <Hero/>
<Ourservice/>
<Review/>
   <About/>
   <Faculty/>
   <ContactUs/>
   </> 

    
  )
}

export default App
