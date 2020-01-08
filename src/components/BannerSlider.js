import React, { Fragment } from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoScroll: 1,
  };

  return(
    <Fragment>
      <div className="banner-slider">
        <div>
          <Slider {...settings}>
            <div className="banner-item">
              <Link to="/abc">
                <img src="https://www.firstclasswatches.co.uk/blog/wp-content/uploads/2017/06/versace-banner.jpg" alt="Banner Item"/>
              </Link>
            </div>
            <div className="banner-item">
              <Link to="/abc">
                <img src="https://i.pinimg.com/originals/4b/60/39/4b60396f36f9031e0579cd7dd8ce9144.jpg" alt="Banner Item"/>
              </Link>
            </div>
            <div className="banner-item">
              <Link to="/abc">
                <img src="https://www.fhinds.co.uk/Images/RotatingBanner/large/PulsarBanner848x346.jpg" alt="Banner Item"/>
              </Link>
            </div>
            <div className="banner-item">
              <Link to="/abc">
                <img src="https://www.omegawatches.com/media/gene-cms/h/o/home-sp-moonwatchv2-large_1.jpg" alt="Banner Item"/>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </Fragment>
  )
}

export default BannerSlider;