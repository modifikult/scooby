import React from 'react';
import './StockSlider.css';
import Slider from 'react-slick';
import slide1 from './applewatch_6_desktop.jpg';
import slide2 from './iphone_11_desktop.jpg';
import slide3 from './iphone_12_pro_desktop.jpg';

class StockSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className='main__stock-slider'>
                <Slider {...settings}>
                    <div>
                        <img src={slide1} alt='appleWatches series 6' className='slide__img'/>
                    </div>
                    <div>
                        <img src={slide2} alt='iPhones 11' className='slide__img'/>
                    </div>
                    <div>
                        <img src={slide3} alt='iPhones 12' className='slide__img'/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default StockSlider