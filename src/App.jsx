

import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import Services from './components/Services';
import Gallery from './components/Gallery' 
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-scroll';

function App() {
  

  return (
    <>
    <BrowserRouter> <div className='bg-white'>
    <Navbar  />
   <Home />
   
    <AboutUs/>
    <Services/>
    <Gallery/>
    <Testimonial/>
    <Contact/>
    <Footer/>

    
    
   
    </div></BrowserRouter>
   
      
    </>
  )
}

export default App
