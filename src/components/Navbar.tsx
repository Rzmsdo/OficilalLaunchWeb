import React, { useState } from 'react';
import { navLinks } from '../../constants/index.ts';
import type { NavLink } from '../../constants/index.ts';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="#" className="navbar-logo">Mandarina Projects</a>

            <button
                className="navbar-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menú"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
                {navLinks.map((link: NavLink) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;