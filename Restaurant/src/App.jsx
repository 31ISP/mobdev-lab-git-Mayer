import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import MenuList from "./components/MenuList"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (<>
  {/* ==================== HEADER ==================== */}
  <Header />
  {/* ==================== HERO ==================== */}
  <Hero />
  {/* ==================== MENU ==================== */}
  <MenuList />
  {/* ==================== REVIEWS ==================== */}
  <Reviews />
  
  {/* ==================== FOOTER ==================== */}
  <Footer />
</>
  )
}

export default App
