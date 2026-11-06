import React, { useState } from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { NAV_LINKS } from '../../content';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className='navbar wrap' aria-label='Основное меню'>
      <a href='#header' aria-label='Гремячинский Док, на главную'>
        <img src={logo} alt='Гремячинский Док' />
      </a>
      <button
        className='navbar__toggle'
        type='button'
        aria-expanded={isMenuOpen}
        aria-controls='navbar-menu'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? 'Закрыть' : 'Меню'}
      </button>
      <div id='navbar-menu' className={isMenuOpen ? 'navbar__menu navbar__menu--open' : 'navbar__menu'}>
        <ul className='navbar__links'>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className='navbar__contacts'>
          <a href='tel:+73422500888'><FaPhone aria-hidden='true' />+7 (342) 250-08-88</a>
          <a href='mailto:info@grdok.ru'><IoMdMail aria-hidden='true' />info@grdok.ru</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
