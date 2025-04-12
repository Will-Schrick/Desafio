import { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const cities = [
    'Barcelona',
    'Madrid',
    'Málaga',
    'Valencia',
    'Sevilla',
    'Zaragoza',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header>
      {/* Top orange bar */}
      <div className="top-bar">
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div className="subscribe">
          <a href="#">Suscríbete Gratis &gt;&gt;</a>
        </div>
      </div>

      {/* Centered logo */}
      <div className="logo-wrapper">
        <img src="/logo-con-letra.png.webp" alt="Logo" className="logo" />
      </div>

      {/* Main nav */}
      <div className="main-nav">
        <nav className="nav-links">
          <a href="#">Ocio</a>
          <a href="#" className="active">
            Viajes
          </a>
          <a href="#">Shopping</a>
          <a href="#">Educación</a>
          <a href="#">Salud</a>
          <a href="#">Estilo de vida</a>
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
        </nav>

        <div className="right-controls" ref={dropdownRef}>
          <span
            className="dropdown-label"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Ciudad{' '}
            <i className={`fas fa-chevron-${showDropdown ? 'up' : 'down'}`}></i>
          </span>
          <button className="club-btn">Club QHN</button>
        </div>
      </div>

      {/* Full-width city dropdown */}
      {showDropdown && (
        <div className="full-dropdown">
          <div className="city-grid">
            {cities.map((city) => (
              <a href="#" key={city} className="dropdown-city">
                {city}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
