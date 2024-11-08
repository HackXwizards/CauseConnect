// src/shared/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          Volunteer Finder
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
          <Link to="/login">
            <button className="bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded hover:bg-yellow-300">
              Login
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 p-4">
          <Link to="/" className="block py-2 hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="block py-2 hover:text-yellow-400">
            About
          </Link>
          <Link to="/contact" className="block py-2 hover:text-yellow-400">
            Contact
          </Link>
          <Link to="/login">
            <button className="w-full bg-yellow-400 text-blue-900 font-semibold py-2 rounded mt-4 hover:bg-yellow-300">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;