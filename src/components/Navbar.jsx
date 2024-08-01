import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <ul className="flex space-x-4">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
