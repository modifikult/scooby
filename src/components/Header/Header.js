import React from 'react'
import logo from './logo.png'
import './Header.css'
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import SearchPanel from "./SearchPanel/SearchPanel";
import Cart from "./Cart/Cart";
import {Link} from "react-router-dom";
import PopUpMenu from "./PopUpMenu/PopUpMenu";

class Header extends React.Component {
    state = {
        isOpen: false
    }

    updateIsOpen = (val) => {
        this.setState({isOpen: val})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isOpen} = this.state
        const body = document.querySelector('body')
        if(prevState.isOpen !== isOpen) {
            if(isOpen) {
                body.style.overflow = 'hidden'
            } else {
                body.style.overflow = 'visible'
            }

        }
    }
    render() {
        const isOpen = this.state.isOpen

        return (
            <>
                <header>
                    <div className="section">
                        <div className='header-wrapper'>
                            <div className='burger-menu'>
                                <BurgerMenu isOpen={isOpen} updateIsOpen={this.updateIsOpen}/>
                            </div>
                            <div className="logo">
                                <Link to='/'>
                                    <img src={logo} alt="logo"/>
                                </Link>
                            </div>
                            <div className="search-panel">
                                <SearchPanel/>
                            </div>
                            <div className="cart">
                                <Cart/>
                            </div>
                        </div>
                    </div>
                </header>
                <PopUpMenu isOpen={isOpen} updateIsOpen={this.updateIsOpen}/>
            </>
        )
    }
}

export default  Header