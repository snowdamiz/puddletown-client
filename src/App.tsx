import { useRef } from 'react'
import Header from './components/header'
import Home from './components/home/'
import Services from './components/services'
import About from './components/about'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import NavMobile from './components/nav-mobile'
import { useStore } from './store.ts'
import './App.scss'

export default function App() {
  const { menuOpen } = useStore((state) => state)

  const homeRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  return <main>
    { menuOpen && <NavMobile refs={[homeRef, servicesRef, aboutRef, portfolioRef, contactRef]} /> }
    <Header refs={[homeRef, servicesRef, aboutRef, portfolioRef, contactRef]} />
    <section id="home" ref={homeRef}><Home refs={[homeRef, servicesRef, aboutRef, portfolioRef, contactRef]}/></section>
    <section id="services" ref={servicesRef}><Services /></section>
    <section id="about" ref={aboutRef}><About /></section>
    <section id="portfolio" ref={portfolioRef}><Portfolio /></section>
    <section id="contact" ref={contactRef}><Contact /></section>
  </main>
}
