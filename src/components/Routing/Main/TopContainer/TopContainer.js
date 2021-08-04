import React from 'react';
import './TopContainer.css';
import Slider from 'react-slick';
import slide1 from './applewatch_6_desktop.jpg';
import slide2 from './iphone_11_desktop.jpg';
import slide3 from './iphone_12_pro_desktop.jpg';

class TopContainer extends React.Component {
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
            <div className='section top-container'>
                <Slider {...settings}>
                    <div>
                        <img src={slide1} alt='appleWatches series 6' className='stock-slides'/>
                    </div>
                    <div>
                        <img src={slide2} alt='iPhones 11' className='stock-slides'/>
                    </div>
                    <div>
                        <img src={slide3} alt='iPhones 12' className='stock-slides'/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default TopContainer