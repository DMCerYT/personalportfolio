import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import TestPage from '../pages/Test';
import About from '../pages/About';

export default function AppRoutes({ location }) {
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gtlife" element={<Home />} />
      <Route path="/superdupertestpageletsgo" element={<TestPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
