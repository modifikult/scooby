import React from 'react';
import './Payment.css';

class Payment extends React.Component {
    render () {
        return (
            <div className='section payment'>
                <h1>
                    Оплата
                </h1>
                <img src="https://firebasestorage.googleapis.com/v0/b/scooby-54939.appspot.com/o/oplata_nalichnymi.png?alt=media&token=dc4a217a-8c7b-4562-a5c3-480321fd5507" alt="pay-cash"/>
                <h3>Оплата наличными при получении товара</h3>
                <p>
                    Оплата наличными при получении товара возможна во всех наших магазинах, а также при доставке товара
                    курьером по г. Киев
                    <br/>
                    Оплата производится исключительно в национальной валюте. В подтверждение оплаты мы выдаем Вам
                    товарный чек.
                </p>
                <img src="https://firebasestorage.googleapis.com/v0/b/scooby-54939.appspot.com/o/online-pay-banner-2.jpg?alt=media&token=4afac48c-2ad7-447d-a424-7e41228e49ae" alt="pay-card"/>
                <h3>Оплата картой на сайте</h3>
                <p>
                    Вы можете оплатить ваш заказ платежными картами Visa и Mastercard непосредственно на сайте, в момент
                    оформления заказа. Если Вы воспользовались кнопкой "Купить в один клик" или оформили заказ по
                    телефону, наш менеджер отправит вам ссылку по которой вы сможете произвести оплату картой онлайн.
                    Для возврата средств при отмене заказа обратитесь на нашу горячую линию +38 097 800 8888 и оставьте
                    заявку. Деньги будут возвращены на карту в течении 3-х рабочих дней.
                </p>
            </div>
        )
    }
}

export default Payment