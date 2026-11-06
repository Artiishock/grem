import React from 'react';
import './geograpgys.css';
import Ship from '../assets/ship.svg';
import Car from '../assets/car.svg';
import Train from '../assets/train.svg';
import Map from '../assets/geogrephi.png';
import { CERTIFICATES } from '../../content';

const TRANSPORT = [
  { icon: Ship, label: 'Морем' },
  { icon: Train, label: 'Железной дорогой' },
  { icon: Car, label: 'Автотранспортом' },
];

const Geograpgys = () => (
  <section id='geograpgys' className='wrap'>
    <div className='supply'>
      <div className='supply__left'>
        <h2 className='section-title'>Стабильные поставки за счет собственной лесозаготовки</h2>
        <p>Гибкий подход к условиям сотрудничества: скидки, различные формы оплаты, условия поставки.</p>
      </div>
      <div className='supply__right chamfer'>
        {CERTIFICATES.map((certificate) => (
          <div key={certificate.title}>
            <h3>{certificate.title}</h3>
            <p>{certificate.text}</p>
          </div>
        ))}
      </div>
    </div>
    <div className='delivery'>
      <div className='delivery__head'>
        <h2 className='section-title'>География поставок</h2>
        <div>
          <p>Доставляем грузы по всему миру: в Европу, Азию, Америку, Египет</p>
          <ul className='delivery__transport'>
            {TRANSPORT.map((item) => (
              <li key={item.label}><img src={item.icon} alt={item.label} /></li>
            ))}
          </ul>
        </div>
      </div>
      <img className='delivery__map' src={Map} alt='Карта мира с выделенной территорией России и маршрутами поставок' loading='lazy' />
    </div>
  </section>
);

export default Geograpgys;
