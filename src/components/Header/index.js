import React from 'react';
import { AiOutlineStock } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <AiOutlineStock size={40} color="white" />
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/toplist">Toplist</Link>
        <Link to="/Portifolio">Portfolio</Link>
      </nav>
    </header>
  )
};

export default Header;
