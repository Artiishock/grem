import React from 'react'
import '../footer/footer.css'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <section className='footer'>
       <div className="footer__container">
        <div className='logo__inf'>
            <img src={Logo} alt="logo" />
            <p>
            Современное предприятие по производству гнуто-клееных изделий (латофлекс), фанеры, топливных брикетов RUF, березового угля, пиломатериалов
            </p>
          </div>
          <div className="footer__impiem">
            <h5>Реализация</h5>
            <p>
              Латофлекс
            </p>
            <p>
              Фанера
            </p>
            <p>
              Брикеты топливные RUF
            </p>
            <p>
              Пиломатериалы
            </p>
            <p>
             Кроватные основания
            </p>
            <p>
             Уголь 
            </p>
            <p>
              Саженцы 
            </p>
            <p>
              Отходы производства
            </p>
          </div>
          <div className="footer__about">
            <h5>О компании</h5>
            <p>
              Продукция
            </p>
            <p>
              Деятельность
            </p>
            <p>
              Приемущества
            </p>
            <p>
              Поставщикам
            </p>
            <p>
              Вакансии
            </p>
            <p>
              Новости
            </p>
          </div>
          <div className="footer__department">
            <h5>Отдел закупок</h5>
            <p>
              purchase@grdok.ru
            </p>
            <h5>Отдел продаж</h5>
            <p>
              ale@grdok.ru
            </p>
            <p>
             @gremdok_bot
            </p>
            <p>
              Мелкий опт, «карандаши», «пятаки» : +7 (342) 502-16-91
            </p>
          </div>
          <div className="footer__coop">
            <h5>Контакты</h5>
            <p>
              info@grdok.ru
            </p>
            <h5>Адрес</h5>
            <p>
              Гремячинск Пермский край 618270 РФ, пос. Юго-Западный, г. Гремячинск, ул. Коммунистическая, д.1
            </p>
          </div>
        </div> 
       <div className="footer__p">
        <p>
          © 2022 ГремДок, все права защищены
        </p>
        <p>
          Политика конфиденциальности
        </p>
        </div>
    </section>
  )
}

export default Footer