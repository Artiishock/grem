import React from 'react';
import './news.css';
import { NEWS } from '../../content';

const News = () => (
  <section id='news' className='news wrap'>
    <h2 className='section-title'>Новости</h2>
    <div className='news__grid'>
      {NEWS.map((item) => (
        <article key={item.title}>
          <img src={item.image} alt='' loading='lazy' />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <time>{item.date}</time>
        </article>
      ))}
    </div>
  </section>
);

export default News;
