import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
