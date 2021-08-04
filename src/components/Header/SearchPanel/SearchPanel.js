import React from 'react'
import './SearchPanel.css'

class SearchPanel extends React.Component {
    render() {
        return (
             <div className='search-panel-wrapper'>
                <input type="text" className='search-panel-input' placeholder=' Введите название товара для поиска'/>
                <button type='button' className='search-panel-button'>Поиск</button>
             </div>
        );
    }
}

export default SearchPanel