import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  p-2">
      <div className="flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-xl font-bold lpf">SteezyWeb</div>

        {/* Desktop Menu */}
        <ul className="hidden lpf md:flex gap-6 text-lg">
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/lookbook">Lookbook</Link></li>
          <li><Link to="/archives">Archives</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex gap-4 text-lg">
          <Link to="/profile"><i className="fas fa-user"></i></Link>
          <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-2 mt-2 text-lg lpf">
          <li><Link to="/home" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/lookbook" onClick={() => setIsOpen(false)}>Lookbook</Link></li>
          <li><Link to="/archives" onClick={() => setIsOpen(false)}>Archives</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contacts</Link></li>
          <li className="flex gap-4">
            <Link to="/profile"><i className="fas fa-user"></i></Link>
            <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
