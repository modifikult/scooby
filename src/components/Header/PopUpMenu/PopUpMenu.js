import React from 'react';
import './PopUpMenu.css';
import {menu} from './menu';
import {Link} from "react-router-dom";

class PopUpMenu extends React.Component {
    componentDidMount() {
        const next = document.querySelectorAll('.menu__next')
        const prev = document.querySelectorAll('.menu__prev')

        next.forEach(elem =>
            elem.onclick = (e) => {
                const nextMenu = e.target.nextSibling
                const prevMenu = e.target.parentElement.parentElement
                console.log(nextMenu)
                console.log(prevMenu)
                if (prevMenu.classList.contains('menu__list__level-1')) {
                    nextMenu.style.transform = 'translateX(100%)'
                    nextMenu.style.transition = 'all .4s'
                    prevMenu.style.transform = 'translateX(-100%)'
                    prevMenu.style.transition = 'all .4s'
                } else if (prevMenu.classList.contains('menu__list__level-2')) {
                    nextMenu.style.transform = 'translateX(200%)'
                    nextMenu.style.transition = 'all .4s'
                    prevMenu.style.transform = 'translateX(-100%)'
                    prevMenu.style.transition = 'all .4s'
                }
            })

        prev.forEach(elem => {
            elem.onclick = (e) => {
                const nextMenu = e.target.parentElement
                const prevMenu = e.target.parentElement.parentElement.parentElement
                if (prevMenu.classList.contains('menu__list__level-1')) {
                    nextMenu.style.transform = 'translateX(-100%)'
                    nextMenu.style.transition = 'all 0s'
                    prevMenu.style.transform = 'translateX(0%)'
                    prevMenu.style.transition = 'all 0'
                } else if (prevMenu.classList.contains('menu__list__level-2')) {
                    nextMenu.style.transform = 'translateX(-100%)'
                    nextMenu.style.transition = 'all 0s'
                    prevMenu.style.transform = 'translateX(100%)'
                    prevMenu.style.transition = 'all 0'
                }
            }
        })
    }

    render() {
        const {isOpen} = this.props
        return (
            <div className={isOpen ? 'menu menu_active' : 'menu'} onClick={() => this.props.updateIsOpen(false)}>
                <div className="menu__blur"></div>
                <div className="menu__content" onClick={e => e.stopPropagation()}>
                    <ul className='menu__list menu__list__level-1' key='first'>
                        <p>&nbsp;</p>
                        {menu.map((elem, idx) => (
                            <li key={elem.name}>
                                <Link to={elem.name.replace(/ /g, '-')} className='link__item'>{elem.name}</Link>
                                <span className='menu__next'>&gt;</span>
                                <ul className='menu__list menu__list__level-2' key={'secondLevel' + idx}>
                                    <p className='menu__prev'>Назад</p>
                                    {elem.submenu.map((elem, idx) => (
                                        <li key={elem.name}>
                                            <Link to={elem.name.replace(/ /g, '-')}
                                                  className='link__item'>{elem.name}</Link>
                                            <span className='menu__next'>&gt;</span>
                                            <ul className='menu__list menu__list__level-3' key={'thirdLevel' + idx}>
                                                <p className='menu__prev'>Назад</p>
                                                {elem.submenu.map(elem => (
                                                    <li key={elem.name}>
                                                        <Link to={elem.name.replace(/ /g, '-')}
                                                              className='link__item'>{elem.name}</Link>
                                                    </li>

                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PopUpMenu