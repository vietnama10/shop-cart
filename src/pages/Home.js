import React, { Fragment } from 'react';
import ProductContainer from '../containers/Products';
import BannerSlider from '../components/BannerSlider';

const Home = () => {
  return (
    <Fragment>
      <BannerSlider/>
      <ProductContainer />
    </Fragment>
  )
}

export default Home;