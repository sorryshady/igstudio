import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import AboutUs from './Components/AboutUs/AboutUs'
import Practice from './Components/Practice/Practice'
import Testimonials from './Components/Testimonials/Testimonials'
import Attorney from './Components/Attorneys/Attorney'
import Faq from './Components/Faq/Faq'
import NewsLetter from './Components/NewsLetter/NewsLetter'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Practice />
      <Testimonials />
      <Attorney />
      <Faq />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
