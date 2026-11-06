import React from 'react';
import './works.css';

const Works = () => (
  <section id='works' className='works wrap'>
    <h2 className='section-title'>Актуальные вакансии</h2>
    <article className='vacancy chamfer'>
      <div>
        <h3>Водитель лесовоза</h3>
        <p className='vacancy__salary'>З.п. от 50 000 ₽</p>
      </div>
      <a className='btn' href='#connection'>Откликнуться</a>
    </article>
  </section>
);

export default Works;
