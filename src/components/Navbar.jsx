import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      toggleDropdown();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Hospital</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to={"/"} className="nav-links">
              Anasayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/hakkimizda"
              className={`nav-links ${isDropdownOpen ? 'active' : ''}`}
              onClick={handleDropdownClick}
            >
              Hakkımızda
            </Link>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
              <li className="dropdown-item">
                <Link href="/sss" className="nav-links">
                  SSS
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"hizmetler"} className="nav-links">
              Hizmetler
            </Link>
          </li>
        <Link className='nav-btn'>İletişim</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;