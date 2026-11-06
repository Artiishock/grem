import React from 'react';
import './products.css';
import wood from '../assets/wood.svg';
import { PRODUCTS } from '../../content';

const Products = () => (
  <section id='products' className='products'>
    <img className='products__decor' src={wood} alt='' aria-hidden='true' />
    <div className='wrap'>
      <div className='products__head'>
        <h2 className='section-title'>Продукция завода</h2>
        <p>Ниже представлен список нашей продукции. Получить дополнительную информацию, а также оставить заявку можно по контактам коммерческой службы.</p>
      </div>
      <ul className='products__grid'>
        {PRODUCTS.map((product) => (
          <li className='product chamfer' key={product.title}>
            <img src={product.image} alt='' loading='lazy' />
            <h3>{product.title}</h3>
            <p>{product.text}</p>
            <a className='btn' href='#connection' aria-label={`Запросить информацию: ${product.title}`}>Подробнее о товаре</a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Products;
