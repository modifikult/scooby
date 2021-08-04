import React from 'react';
import './Footer.css';
import facebook from './facebook.svg';
import instagram from './instagram.svg';
import telegram from './telegram.svg';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="section">
                        <nav>
                            <div className="navigate">
                                <Link to="/guarantee" key='guarantee'>Гарантия</Link>
                                <Link to="/delivery" key='delivery'>Доставка</Link>
                                <Link to="/payment" key='payment'>Оплата</Link>
                                <Link to="/cooperation" key='cooperation'>Сотруднечество</Link>
                            </div>
                            <div className="social-networks">
                                <a
                                    href="https://t.me/modifikult2016"
                                    key='telegram'
                                    target='blank'
                                >
                                    <img src={telegram} alt="telegram"/>
                                </a>
                                <a
                                    href="https://www.instagram.com/krivobokroma/"
                                    key='instagram'
                                    target='blank'
                                >
                                    <img src={instagram} alt="instagram"/>
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=100022728345599'
                                   key='facebook'
                                   target='blank'
                                >
                                    <img src={facebook} alt="facebook"/>
                                </a>
                            </div>

                        </nav>
                    <div className="copyright">
                        <p>&#169;Scooby 2021</p>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer