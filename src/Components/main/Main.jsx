import React from 'react';
import './main.css';
import { ACTIVITIES } from '../../content';

const Main = () => (
  <section id='main' className='activities wrap'>
    <h2 className='section-title'>Основная деятельность</h2>
    {ACTIVITIES.map((activity) => (
      <article className='activity' key={activity.title}>
        <div className='activity__lead'>
          <div className='activity__text'>
            <h3>{activity.title}</h3>
            {activity.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <img className='activity__image' src={activity.image} alt={activity.imageAlt} loading='lazy' />
        </div>
        {activity.gallery.length > 0 && (
          <div className='activity__gallery'>
            {activity.gallery.map((item) => <img src={item.image} alt={item.alt} loading='lazy' key={item.alt} />)}
          </div>
        )}
      </article>
    ))}
  </section>
);

export default Main;
