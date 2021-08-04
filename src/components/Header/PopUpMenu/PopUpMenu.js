import React from 'react';
import './PopUpMenu.css';
import {menu} from './menu';
import {Link} from "react-router-dom";

class PopUpMenu extends React.Component {
    componentDidMount() {
        const next = document.querySelectorAll('.content__next')
        const back = document.querySelectorAll('.content__prev')
        const categoryItem = document.querySelectorAll('.menu__content a')

        next.forEach(elem =>
            elem.onclick = (e) => {
            const childCategory = e.target.nextSibling
            const parentCategory = e.target.parentElement.parentElement

                back.forEach(elem => {
                    elem.onclick = (e) => {
                        const nextMenu = e.target.parentElement
                        const prevMenu = e.target.parentElement.parentElement.parentElement
                        if(prevMenu.className === 'content__level-1') {
                            nextMenu.style.transform = 'translateX(-100%)'
                            nextMenu.style.transition = 'all 0s'
                            prevMenu.style.transform = 'translateX(0%)'
                            prevMenu.style.transition = 'all 0'
                        } else if (prevMenu.className === 'content__level-2') {
                            nextMenu.style.transform = 'translateX(-100%)'
                            nextMenu.style.transition = 'all 0s'
                            prevMenu.style.transform = 'translateX(100%)'
                            prevMenu.style.transition = 'all 0'
                        }
                    }
                })
                if(parentCategory.className === 'content__level-1') {
                    childCategory.style.transform = 'translateX(100%)'
                    childCategory.style.transition = 'all .4s'
                    parentCategory.style.transform = 'translateX(-100%)'
                    parentCategory.style.transition = 'all .4s'
                } else if (parentCategory.className === 'content__level-2') {
                    childCategory.style.transform = 'translateX(200%)'
                    childCategory.style.transition = 'all .4s'
                    parentCategory.style.transform = 'translateX(-100%)'
                    parentCategory.style.transition = 'all .4s'
                }
        })

        categoryItem.forEach(elem => {
            elem.onclick = (e) => {
                e.stopPropagation()
                // const category = elem.firstChild.innerHTML
            }
        })
    }
    render() {
        const {isOpen} = this.props
        return (
            <div className={isOpen ? 'menu active' : 'menu'} onClick={()=> this.props.updateIsOpen(false)}>
                <div className="menu__blur"></div>
                <div className="menu__content" onClick={e => e.stopPropagation()}>
                    <ul className='content__level-1' key='first'>
                        <p>&nbsp;</p>
                    {menu.map((elem, idx) => (
                        <li key={elem.name}>
                            <Link to={elem.name.replace(/ /g, '-')} className='content__category'>{elem.name}</Link>
                            <span className='content__next'>&gt;</span>
                            <ul className='content__level-2' key={'secondLevel' + idx}>
                                <p className='content__prev'>Назад</p>
                                {elem.submenu.map((elem, idx) => (
                                    <li key={elem.name}>
                                        <Link to={elem.name.replace(/ /g, '-')} className='content__category'>{elem.name}</Link>
                                        <span className='content__next'>&gt;</span>
                                        <ul className='content__level-3' key={'thirdLevel' + idx}>
                                            <p className='content__prev'>Назад</p>
                                            {elem.submenu.map(elem => (
                                                <li key={elem.name}>
                                                    <Link to={elem.name.replace(/ /g, '-')} className='content__category'>{elem.name}</Link>
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