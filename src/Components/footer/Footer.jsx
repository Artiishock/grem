import React from 'react';
import './footer.css';
import Logo from '../assets/logo.png';
import { COMPANY_SUMMARY, FOOTER_PRODUCTS } from '../../content';

const COMPANY_LINKS = [
  { href: '#products', label: 'Продукция' },
  { href: '#main', label: 'Деятельность' },
  { href: '#geograpgys', label: 'Преимущества' },
  { href: '#connection', label: 'Поставщикам' },
  { href: '#works', label: 'Вакансии' },
  { href: '#news', label: 'Новости' },
];

const Footer = () => (
  <footer className='footer'>
    <div className='footer__grid wrap'>
      <div className='footer__brand'>
        <img src={Logo} alt='Гремячинский Док' />
        <p>{COMPANY_SUMMARY}</p>
      </div>
      <div>
        <h2>Реализация</h2>
        <ul>{FOOTER_PRODUCTS.map((product) => <li key={product}>{product}</li>)}</ul>
      </div>
      <div>
        <h2>О компании</h2>
        <ul>{COMPANY_LINKS.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}</ul>
      </div>
      <div>
        <h2>Отдел закупок</h2>
        <p><a href='mailto:purchase@grdok.ru'>purchase@grdok.ru</a></p>
        <h2>Отдел продаж</h2>
        <p><a href='mailto:ale@grdok.ru'>ale@grdok.ru</a></p>
        <p>@gremdok_bot</p>
        <p>Мелкий опт, «карандаши», «пятаки»: <a href='tel:+73425021691'>+7 (342) 502-16-91</a></p>
      </div>
      <div>
        <h2>Контакты</h2>
        <p><a href='mailto:info@grdok.ru'>info@grdok.ru</a></p>
        <h2>Адрес</h2>
        <p>Гремячинск, Пермский край, 618270, РФ, пос. Юго-Западный, г. Гремячинск, ул. Коммунистическая, д. 1</p>
      </div>
    </div>
    <div className='footer__bottom wrap'>
      <p>© 2022 ГремДок, все права защищены</p>
      <p>Политика конфиденциальности</p>
    </div>
  </footer>
);

export default Footer;
