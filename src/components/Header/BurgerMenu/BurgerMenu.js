import  React from 'react'
import './BurgerMenu.css'

class BurgerMenu extends React.Component {
    render() {
        return (
            <div className='menu-button' onClick={() => this.props.updateIsOpen(!this.props.isOpen)}>
                <span/>
                <span/>
                <span/>
            </div>
        )
    }
}

export default BurgerMenu