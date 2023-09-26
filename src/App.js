import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import AboutUs from './Components/AboutUs/AboutUs'
import Practice from './Components/Practice/Practice'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Practice />
    </div>
  )
}

export default App
