import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <section className='conteiner'>
      <div>
      <img src={logo} alt="" />
      </div>
      <div>
        <a href='#products'>ПРОДУКЦИЯ</a>
      </div>
      <div>
        <a href='#connection'>ПОСТАВЩИКАМ</a>
      </div>
      <div>
        <a href='#works'>ВАКАНСИИ</a>
      </div>
      <div>
        <a href='#news'>НОВОСТИ</a>
      </div>
      <div>
        <a href='#connection'>КОНТАКТЫ</a>
      </div>
      <div className='contact'>
        <div ><FaPhone/></div>
        <p>+7 (342) 250-08-88</p>
      </div>
      <div className='mail'>
      <div><IoMdMail /></div>
        <p>info@grdok.ru.</p>
      </div>
      <div className='ru'>
      <div><MdArrowDropDown /></div>
        <p>RU</p>
      </div>
    </section>
  )
}

export default Navbar