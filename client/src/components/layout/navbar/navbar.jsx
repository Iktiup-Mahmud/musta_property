import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/button/button';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="/">Dwello</Link>
      </div>
      <ul className="navbar_links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar_actions">
        <Button  variant="primary" size="small">Sign up</Button>
      </div>
    </nav>
  );
}
