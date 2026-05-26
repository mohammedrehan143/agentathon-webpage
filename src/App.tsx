import { useEffect } from 'react';
import Topbar from './components/Topbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import About from './components/About';
import Highlights from './components/Highlights';
import Speaker from './components/Speaker';
import ProblemStatements from './components/ProblemStatements';
import EventDetails from './components/EventDetails';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  }, []);

  return (
    <>
      <Topbar />
      <Hero />
      <div className="content">
        <Countdown />
        <About />
        <Highlights />
        <Speaker />
        <ProblemStatements />
        <EventDetails />
        <FAQ />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
