import React from 'react';
import './header.css';
import Navbar from '../navbar/Navbar';
import { COMPANY_SUMMARY } from '../../content';

const Header = () => (
  <header id='header' className='header'>
    <Navbar />
    <div className='header__content wrap'>
      <h1>Группа компаний <span>Гремячинский Док</span></h1>
      <p>{COMPANY_SUMMARY}</p>
      <a className='btn' href='#connection'>Связаться с нами</a>
    </div>
  </header>
);

export default Header;
