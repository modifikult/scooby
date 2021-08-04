import React from 'react';
import './BottomContainer.css'
import ProductSliderTemplate from "./ProductSliderTemplate/ProductSliderTemplate";

class BottomContainer extends React.Component {
    render() {
        const {newItems, popularItems} = this.props
        return (
            <div className="section">
                <h1 className='category-name'>Новинки</h1>
                <ProductSliderTemplate products={newItems}/>
                <h1 className='category-name'>Популярные</h1>
                <ProductSliderTemplate products={popularItems}/>
            </div>
        )
    }
}

export default BottomContainer