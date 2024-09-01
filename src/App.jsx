import Header from './components/header/Header'
import Home from './components/home/Home'
import Services from './components/services/Services'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import './App.scss'

function App() {
  return (
    <main>
      <Header />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default App
