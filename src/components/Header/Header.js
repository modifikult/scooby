import React from 'react'
import './Header.css'
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import SearchPanel from "./SearchPanel/SearchPanel";
import Cart from "./Cart/Cart";
import PopUpMenu from "./PopUpMenu/PopUpMenu";
import Logo from "./Logo/Logo";

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
        if (prevState.isOpen !== isOpen) {
            if (isOpen) {
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
                    <div className='header__wrapper container '>
                        <BurgerMenu isOpen={isOpen} updateIsOpen={this.updateIsOpen}/>
                        <Logo/>
                        <SearchPanel/>
                        <Cart/>
                    </div>
                </header>
                <PopUpMenu isOpen={isOpen} updateIsOpen={this.updateIsOpen}/>
            </>
        )
    }
}

export default Header