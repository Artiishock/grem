import React, { useState } from 'react';
import './connection.css';
import Check from '../assets/Check.png';
import { CONTACT_REASONS } from '../../content';

const PROMISES = ['Ответим в течение 15 минут, в рабочее время', 'Бережем ваши персональные данные'];
export const DEMO_NOTICE = 'Это демонстрационная версия сайта: заявка никуда не отправлена.';

const Connection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id='connection' className='connection'>
      <div className='connection__grid wrap'>
        <div className='connection__left'>
          <h2 className='section-title'>Свяжитесь с нашим специалистом</h2>
          <p>Заинтересованы в сотрудничестве или остались вопросы? Заполните форму обратной связи, и наши менеджеры обязательно свяжутся с вами.</p>
          <ul className='connection__promises'>
            {PROMISES.map((promise) => (
              <li key={promise}><img src={Check} alt='' />{promise}</li>
            ))}
          </ul>
        </div>
        <form className='connection__form chamfer' onSubmit={handleSubmit}>
          <label className='field'>Контактное лицо
            <input type='text' name='name' placeholder='Ф.И.О.' autoComplete='name' required />
          </label>
          <div className='field-row'>
            <label className='field'>Телефон
              <input type='tel' name='phone' placeholder='+7 999 199 19 19' autoComplete='tel' required />
            </label>
            <label className='field'>Email
              <input type='email' name='email' placeholder='info@mail.ru' autoComplete='email' required />
            </label>
          </div>
          <label className='field'>Причина обращения
            <select name='reason' defaultValue='' required>
              <option value='' disabled>Выберите из списка</option>
              {CONTACT_REASONS.map((reason) => <option key={reason}>{reason}</option>)}
            </select>
          </label>
          <label className='field'>Комментарий
            <textarea name='comment' rows='4' placeholder='Напишите суть вашего вопроса' />
          </label>
          <label className='consent'>
            <input type='checkbox' name='consent' required />
            Нажимая кнопку, я соглашаюсь с политикой конфиденциальности
          </label>
          <button className='btn connection__submit' type='submit'>Связаться с нами</button>
          {isSubmitted && <p className='connection__notice' role='status'>{DEMO_NOTICE}</p>}
        </form>
      </div>
    </section>
  );
};

export default Connection;
