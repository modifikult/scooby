import React from 'react';
import {Link} from 'react-router-dom';
import './Logo.css';
import logo from "./logo.png";

class Logo extends React.Component {
    render () {
        return (
            <Link to='/' className='header__logo'>
                <img src={logo} alt="logo"/>
            </Link>
        )
    }
}

export default Logo