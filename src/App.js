import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import AboutUs from './Components/AboutUs/AboutUs'
import Practice from './Components/Practice/Practice'
import Testimonials from './Components/Testimonials/Testimonials'
import Attorney from './Components/Attorneys/Attorney'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Practice />
      <Testimonials />
      <Attorney />
    </div>
  )
}

export default App
