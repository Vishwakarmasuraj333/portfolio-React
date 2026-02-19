import { useState } from "react";
import "../index.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">Suraj</div>

      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>About</li>
          <li onClick={() => setMenuOpen(false)}>Projects</li>
          <li onClick={() => setMenuOpen(false)}>Skills</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
