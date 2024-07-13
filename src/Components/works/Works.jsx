
import "./works.css"

 import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// core version + navigation, pagination modules:
 import Swipers from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Works = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };
  return (
    <section id='works' className='works'>
      <h2>Актуальные Вакансии</h2>
      <div className="hr"><hr / ></div> 
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiperClass">
            <h3>ВОДИТЕЛЬ ЛЕСОВОЗА</h3>
            <hr />
            <h5>З.п. от 50 000 ₽</h5>
            <p>Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. </p>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperClass">
            <h3>ВОДИТЕЛЬ ЛЕСОВОЗА</h3>
            <hr />
            <h5>З.п. от 50 000 ₽</h5>
            <p>Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. </p>
            <button>Подробнее</button>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="swiperClass">
            <h3>ВОДИТЕЛЬ ЛЕСОВОЗА</h3>
            <hr />
            <h5>З.п. от 50 000 ₽</h5>
            <p>Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. </p>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperClass">
            <h3>ВОДИТЕЛЬ ЛЕСОВОЗА</h3>
            <hr />
            <h5>З.п. от 50 000 ₽</h5>
            <p>Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. </p>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperClass">
            <h3>ВОДИТЕЛЬ ЛЕСОВОЗА</h3>
            <hr />
            <h5>З.п. от 50 000 ₽</h5>
            <p>Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. </p>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperClass">
            <h3>ВОДИТЕЛЬ ЛЕСОВОЗА</h3>
            <hr />
            <h5>З.п. от 50 000 ₽</h5>
            <p>Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. </p>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperClass">
            <h3>ВОДИТЕЛЬ ЛЕСОВОЗА</h3>
            <hr />
            <h5>З.п. от 50 000 ₽</h5>
            <p>Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. </p>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperClass">
            <h3>ВОДИТЕЛЬ ЛЕСОВОЗА</h3>
            <hr />
            <h5>З.п. от 50 000 ₽</h5>
            <p>Оборудование предприятия поставляется от мировых лидеров в сфере деревообработки и обеспечивает стабильный выпуск продукции, которая поставляется в 8 регионов России и 14 стран мира. </p>
            <button>Подробнее</button>
          </div>
        </SwiperSlide>
      </Swiper>

      
    </section>
  )
}

export default Works