import { useRef } from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Services from './components/services/Services'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import NavMobile from './components/nav-mobile/NavMobile'
import { useStore } from './store'
import './App.scss'

export default function App() {
  const { menuOpen } = useStore((state) => state)

  const homeRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  return <main>
    { !menuOpen && <NavMobile refs={[homeRef, servicesRef, aboutRef, portfolioRef, contactRef]} /> }
    <Header refs={[homeRef, servicesRef, aboutRef, portfolioRef, contactRef]} />
    <section id="home" ref={homeRef}><Home /></section>
    <section id="services" ref={servicesRef}><Services /></section>
    <section id="about" ref={aboutRef}><About /></section>
    <section id="portfolio" ref={portfolioRef}><Portfolio /></section>
    <section id="contact" ref={contactRef}><Contact /></section>
  </main>
}
