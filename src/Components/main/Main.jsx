import React from 'react'
import './main.css'
import IMG1 from '../assets/main1.jpg'
import IMG2 from '../assets/main2.jpg'
import IMG3 from '../assets/main3.jpg'
import IMG4 from '../assets/main4.jpg'
import IMG5 from '../assets/main5.jpg'
import IMG6 from '../assets/main6.jpg'
import IMG7 from '../assets/main7.jpg'
import IMG8 from '../assets/main8.jpg'
import IMG9 from '../assets/main9.jpg'

const Main = () => {
  return (
    <section id='main' className='main'>
      <h2>ОСНОВНАЯ ДЕЯТЕЛЬНОСТЬ</h2>
        <div>
          <div className='main__lain-first'>
              <div className='main__info'>
                <h3>ПРОИЗВОДСТВО</h3>
                  <p>Оборудование предприятия поставляется
                    от мировых лидеров в сфере деревообработки
                    и обеспечивает стабильный выпуск продукции</p> 
                    <p>Поставки осуществляются по России и в 14 стран мира. Строгий контроль на каждом этапе производства помогает поддерживать качество продукции.
                    </p>
                  </div>
                <div className='main__img'>
                    <img src={IMG1} alt="" />
                </div>
             </div>
            <div className='main__img-second'>
              <div  >
                  <img src={IMG2} alt="" />
              </div>
                <div>
                  <img src={IMG3} alt="" />
                </div>
              <div>
                  <img src={IMG4} alt="" />
              </div>
            </div>
        </div>
        <div>
          <div className='main__lain-first'>
              <div className='main__info'>
                <h3>ЛЕСОУПРАВЛЕНИЕ И ЗАГОТОВКА</h3>
                  <p>Рубка леса осуществляется на арендованных участках, обеспечивая бесперебойную поставку сырья для производства и для продажи. Расчетная лесосека – 320 000 м3. Общая площадь арендованного леса – 306 000 Га - cертифицирована по стандартам международной добровольной лесной сертификации (FSC).</p> 
                   
                  </div>
                <div className='main__img'>
                    <img src={IMG5} alt="" />
                </div>
             </div>
            <div className='main__img-second'>
              <div  >
                  <img src={IMG6} alt="" />
              </div>
                <div>
                  <img src={IMG6} alt="" />
                </div>
              <div>
                  <img src={IMG6} alt="" />
              </div>
            </div>
        </div>
        <div>
          <div className='main__lain-first'>
              <div className='main__info'>
                <h3>ПИТОМНИКИ</h3>
                  <p>Задача лесопитомника – обеспечение посадочным материалом собственной и сторонней лесозаготовки.
                    </p> 
                    <p>Питомник полностью покрывает потребности Пермского края в сеянцах сибирской ели. Общая площадь теплиц – 4800 м3, питомника – 15 Га. Потенциал – до 4 млн. сеянцев в год.
                    </p>
                  </div>
                <div className='main__img'>
                    <img src={IMG5} alt="" />
                </div>
             </div>
            <div className='main__img-second'>
              <div  >
                  <img src={IMG7} alt="" />
              </div>
                <div>
                  <img src={IMG8} alt="" />
                </div>
              <div>
                  <img src={IMG9} alt="" />
              </div>
            </div>
        </div>
    </section>
  )
}

export default Main