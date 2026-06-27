import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Background3D from './components/Background3D'; 
import ScrollToTop from './components/ScrollToTop'; // <--- 1. Import it

function App() {
  return (
    <Router>
      {/* 2. Add it here, inside the Router */}
      <ScrollToTop />
      
      <Background3D />

      <div className="relative min-h-screen flex flex-col text-white overflow-x-hidden">
        <Header />
        
        <main className="flex-1 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;