import React from 'react'
import './products.css'
import products1 from '../assets/products1.png'
import products2 from '../assets/products2.png'
import products3 from '../assets/products3.png'
import products4 from '../assets/products4.png'
import products5 from '../assets/products5.png'
import products6 from '../assets/products6.png'
import products7 from '../assets/products7.png'
import products8 from '../assets/products8.png'
import wood from '../assets/wood.svg'
const Products = () => {
  return (
    <section id='products' className='product__main'>
    <div className='head'>
        <img className='wood' src={wood} alt="" />
          <div className='product__taytl'>
            <h1>Продукция завода</h1>
            <p>Ниже представлен список нашей продукции. Получить дополнительную информацию, а также оставить заявку можно по контактам коммерческой службы.</p>
          </div>
    </div>
      <div className='product'>

        <div>
            <img src={products1} alt="" />
            <h2>Латофлекс</h2>
            <p>Шпон березовый лущеный, ГОСТ 99-96В
                Смола марки КФМТ - 15, класс эмиссии Е0</p>
                <button className='btn'>Подробнее о товаре</button>
        </div>

        <div>
            <img src={products2} alt="" />         
              <h2>Фанера</h2>
              <p>Шпон березовый лущеный, ГОСТ 99-96В. Смола марки КФМТ - 15, класс эмиссии Е0</p>
              <button className='btn'>Подробнее о товаре</button>
        </div>

        <div>
              <img src={products3} alt="" />
              <h2>Брикеты топливные RUF</h2>
              <p>Прессованные березовые опилки
                без применения химических добавок</p>
                <button className='btn'>Подробнее о товаре</button>
        </div>

        <div>
              <img src={products4} alt="" />
            <h2>Пиломатериалы</h2>
            <p>Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина</p>
            <button className='btn'>Подробнее о товаре</button>
        </div>

        <div>
              <img src={products5} alt="" />
            <h2>Кроватные основания</h2>
            <p>Из берёзового шпона или из массива на ленте</p>
            <button className='btn'>Подробнее о товаре</button>
        </div>

        <div>
              <img src={products6} alt="" />
            <h2>Уголь</h2>
            <p>Микропористый высокоуглеродистый продукт</p>
            <button className='btn'>Подробнее о товаре</button>
        </div>

        <div>
              <img src={products7} alt="" />
            <h2>Саженцы</h2>
            <p>Молодые деревья выращенные в питомнике</p>
            <button className='btn'>Подробнее о товаре</button>
        </div>

        <div>
              <img src={products8} alt="" />
              <h2>Отходы производства</h2>
              <p>Прессованные березовые опилки без применения химических добавок</p>
              <button className='btn'>Подробнее о товаре</button>
        </div>
      </div>
    </section>
  )
}

export default Products