import Header from './components/layout/Header';
import About from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Header />

      <main className='pt-0'>
        <About />
        <Skills />
        <Projects />
        <AboutMe />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
