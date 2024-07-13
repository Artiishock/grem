import React from 'react'
import "./geograpgys.css"
import player from '../assets/polygon3.svg'
import Ship from "../assets/ship.svg"
import Car from "../assets/car.svg"
import Train from "../assets/train.svg"
import Map from "../assets/geogrephi.png"

const Geograpgys = () => {
  return (
    <section id='geograpgys' >
     <div className='geograpgys'>
          <div className='geograpgys__left'>
              <div>
                <h4>Стабильные поставки за счет собственной лесозаготовки</h4>
              </div>
              <div className='playr'>
                <div className='playr__img'>
                <img src={player} alt="" /> 
                </div>
                <div>
                  <p>Смотреть видео о заводе</p>
                </div>
              </div>
              <div className='left__text'>
              <p>Гибкий подход к условиям сотрудничества – скидки, различные формы оплаты, условия поставки. </p>
              </div>
          </div>
          <div className='right'>
          <div>
            <h4>Сертификат FSС	</h4>
            <p>Сертифицированная продукция (FSC 100%) по системе Forest Stewardship Council®.</p>
          </div>
          <div>
            <h4>Соответствие регламенту EUTR</h4>
            <p>(European Union Timber Regulation) – предоставляем необходимый пакт документов. </p>
          </div>
          <div>
              <h4>Сертификат CARB / CARB2	</h4>
              <p>Для поставок в США и другие страны, запрашивающие сертификацию на соответствие производства и продукции стандартам по выбросам формальдегида.</p>
          </div>
          </div>
    </div>
    <div className='supplies'>
      <div className='supplies__info'>
        <div>
          <h2>География Поставок</h2>
        </div>
        <div className='supplies__text-img'>
          <div>
              <p>Доставляем грузы по всему миру в Европу, Азию, Америку, Египет</p>
          </div>
          <div className='supplies__transport'>
            <div>
              <p>---------------</p>
            </div>
              <div>
                <img src={Ship} alt="" />
              </div>
                <div>
                  <p>---------------</p>
                </div>
                    <div>
                      <img src={Train} alt="" />
                    </div>
                      <div>
                        <p>---------------</p>
                        </div>
                        <div>
                          <img src={Car} alt="" />
                        </div>
                      </div>
                       </div>
          </div>
          </div>
      <div className='supplies__img'>
        <img src={Map} alt="" />
      </div>

      
    
    </section>
  )
}

export default Geograpgys