import React from 'react'
import "./connection.css"
import Check from "../assets/Check.png"

const Connection = () => {
  return (
    <section id='connection' className='connection__container'>
       <div className='connection'>
          <div className='connection__left left'>
              <div className='text__left' >
                <h4>Свяжитесь с нашим специалистом</h4>
                <p>Заинтерисованы в сотрудничестве  или остались вопросы? Заполните форму обратной связи и наши менеджеры обязательно свяжутся с вами</p>
              </div>
              <div className='check__container'>
                  <div className='check'>
                    <div className='check__img'>
                      <img src={Check} alt="" /> 
                    </div>
                    <div className='text__check'>
                      <p>Ответим втечение 15 минут, в рабочее время</p>
                    </div>
                    </div>
              <div>
                <div className='check'>
                    <div className='check__img'>
                      <img src={Check} alt="" /> 
                    </div>
                    <div className='text__check'>
                      <p>Бережем ваши персональные данные</p>
                    </div>
                </div>
              </div>
          </div>
          </div>
          <div className='connection__right'>
            <div className='application'>
                <p>Контактное лицо</p>
                <input type="text" placeholder='Ф.И.О' />
                </div>
            <div className='connect'>
            <div className='phone'> 
              <p>Телефон</p>
              <input type="tel" placeholder='+7 999 199 19 19' maxLength={11} />
            </div>
            <div className='email'> 
              <p>Email</p>
              <input type="email" placeholder='info@mail.ru' />
            </div>
            </div>
            <div className='reason'> 
              <p>Причина обращения</p>
              <select>
                <option >Выберите из списка</option>
                <option> Ошибка </option>
                <option> Возврат </option>
                <option> Предложение </option>
                <option> Вопрос </option>
              </select>
            </div>
           
            <div className='comments'>
               <p>Комментарий</p>
              <textarea id="textComment"   placeholder='Напишите суть вашего вопроса'>Напишите суть вашего вопроса</textarea>  
            </div>
            <div className="approval">
            <input type="checkbox" id="scales" name="scales"  />
              <label for="scales">
                
              </label>
              <p>Нажимая кнопку я соглашаюсь с политикой конфиденциальности</p>  
              
             
            </div>
              <div className="connection__btn btn">Связаться с нами</div>
          
         
          
          </div>
    
    </div>
    </section>
  )
}

export default Connection