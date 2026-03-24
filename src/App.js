import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import TestPage from './pages/Test';

function App() {
  return (
    <div className="App appShell">
      <AnimatedBackground />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/superdupertestpageletsgo" element={<TestPage />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
