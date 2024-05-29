import React from 'react'
import './header.css'
import Navbar from '../navbar/Navbar'
import { ImWhatsapp } from "react-icons/im";
const Header = () => {
  return (
    <section id='header' className='header'>
      <Navbar/>
      <div className='container'>
        <div className='container__text'>
          <h1>ГРУППА КОМПАНИЙ </h1>
          <h1> ГРЕМЯЧЕНСКИЙ ДОК</h1>
        </div>
        <div className='container__about'>
          <p>Современное предприятие по производству гнуто-клееных изделий </p>
          <p>(латофлекс), фанеры, топливных брикетов RUF, березового угля, пиломатериалов</p>
        </div>
        <div  className='container__btn'>
          <div >
            <button className='btn'>Связаться с нами</button>
          </div>
          <div className="whats__app">
          <ImWhatsapp />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header