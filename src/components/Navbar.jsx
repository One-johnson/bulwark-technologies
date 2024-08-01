import { Link } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

const Navbar = () => {
  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => { window.location.hash = "#/" } },
    { label: 'About Us', icon: 'pi pi-fw pi-info', command: () => { window.location.hash = "#/about" } },
    { label: 'Services', icon: 'pi pi-fw pi-cog', command: () => { window.location.hash = "#/services" } },
    { label: 'Projects', icon: 'pi pi-fw pi-briefcase', command: () => { window.location.hash = "#/projects" } },
    { label: 'Contact', icon: 'pi pi-fw pi-envelope', command: () => { window.location.hash = "#/contact" } }
  ];

  return (
    <div className="bg-gray-800">
      <Menubar model={items} />
    </div>
  );
};

export default Navbar;
