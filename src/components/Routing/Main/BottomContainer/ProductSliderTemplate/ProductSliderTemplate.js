import React from 'react';
import Slider from "react-slick";
import './ProductSliderTemplate.css'

class ProductSliderTemplate extends React.Component {
    render() {
        const {products} = this.props
        if(products !== null) {
                let settings = {
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 0,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            };
            return (
                <div className='carousel-box'>
                    <Slider {...settings}>
                        {products.map(elem => (
                            <div className='card-item' key={elem.name}>
                                  <div className="card-wrapper">
                                      <img src={elem.img} alt={elem.name} className='card-item-img'/>
                                      <h6 className='card-item-name'>{elem.name}</h6>
                                      <div>
                                          <div className='block-price'>
                                              <p>{elem.oldPrice.toLocaleString()} грн.</p>
                                              <p>{elem.newPrice.toLocaleString()} грн.</p>
                                          </div>
                                          <div className='block-button'>
                                              <button>
                                                  В корзину
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                            </div>
                            )
                        )}
                    </Slider>
                </div>
            );
        }
        return null
    }
}

export default ProductSliderTemplate