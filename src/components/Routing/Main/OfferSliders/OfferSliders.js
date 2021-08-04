import React from 'react';
import './OfferSliders.css'
import ProductSliderTemplate from "./ProductSliderTemplate/ProductSliderTemplate";

class OfferSliders extends React.Component {
    render() {
        const {newItems, popularItems} = this.props
        return (
            <div className="offer-sliders">
                <ProductSliderTemplate products={newItems} sliderHeader='Новинки'/>
                <ProductSliderTemplate products={popularItems} sliderHeader='Популярные'/>
            </div>
        )
    }
}

export default OfferSliders