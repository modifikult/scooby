import React from 'react';
import './Cooperation.css';

class Cooperation extends React.Component {
    render() {
        return (
            <div className='cooperation'>
                <h1>Сотрудничество</h1>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/scooby-54939.appspot.com/o/partnership_ru.png?alt=media&token=f2130983-64a8-4a17-b0c4-a6c2764105d8"
                    alt="partnership"/>
                <p>
                    Интернет магазин eStore.ua приглашает к сотрудничеству производителей и поставщиков любых категорий
                    товаров.
                    <br/>
                    Так же будем рады сотрудничеству с другими интернет магазинами, где мы можем выступать в качестве
                    поставщика.
                    <br/>
                    Для начала сотрудничества отправьте письмо на
                    <a href="mailto:modifikult2016@gmail.com"> modifikult2016@gmail.com</a>
                </p>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/scooby-54939.appspot.com/o/suppliers_ru.png?alt=media&token=1ddd42db-5b8d-4833-88eb-ce8736ce8e70"
                    alt="suppliers"/>
            </div>
        )
    }
}

export default Cooperation