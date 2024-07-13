import React from 'react'
import "./news.css"
import News2 from'../assets/news3.jpg'
import News1 from '../assets/news1.jpg'
import News3 from '../assets/news2.jpg'

const News = () => {
  return (
    <section id='news' className='news'>
     <div className='news__head'>
      <h3>НОВОСТИ</h3>
      <button>Читать все новости</button>
      </div>
      <div className='news__text'>
          <div>
            <img src={News1} alt="" />
            <h4>Вышли на международный рынок</h4>
            <p>Оборудование предприятия поставляется
              от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции
            </p>
            <h5>25.12.2021</h5>
          </div>
          <div>
            <img src={News2} alt="" />
            <h4>Встреча с европепйскими коллегами</h4>
            <p>Оборудование предприятия поставляется
              от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции
            </p>
            <h5 >25.12.2021</h5>
          </div>
          <div>
            <img src={News3} alt="" />
            <h4>Новое оборудование</h4>
            <p>Оборудование предприятия поставляется
              от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции
            </p>
          <h5>25.12.2021</h5>
          </div>
      </div>
    </section>
  )
}

export default News