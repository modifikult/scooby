import React from 'react'
import './SearchPanel.css'

class SearchPanel extends React.Component {
    render() {
        return (
             <div className='header__search-panel'>
                <input type="text" className='search-input' placeholder=' Введите название товара для поиска'/>
                <button type='button' className='search-button'>Поиск</button>
             </div>
        );
    }
}

export default SearchPanel