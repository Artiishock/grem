import React from 'react'
import "./geograpgys.css"
import player from '../assets/polygon3.svg'

const Geograpgys = () => {
  return (
    <section id='geograpgys' >
     <div className='geograpgys'>
          <div className='left'>
              <div>
                <h4>Стабильные поставки за счет собственной лесозаготовки</h4>
              </div>
              <div className='playr'>
                <div>
                <img src={player} alt="" /> 
                </div>
                <div>
                  <p>Смотреть видео о заводе</p>
                </div>
              </div>
              <div>
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
    </section>
  )
}

export default Geograpgys