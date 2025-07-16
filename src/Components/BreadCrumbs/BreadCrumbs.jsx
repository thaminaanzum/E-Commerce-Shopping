import React from 'react';
import './BreadCrumbs.css';
import arrow_icon from '../Assets/breadcrumbs_arrow.png';

const BreadCrumbs = ({ product }) => {
  if (!product) {
    return <div className='breadcrumbs'>HOME <img src={arrow_icon} alt="" /> SHOP</div>;
  }

  return (
    <div className='breadcrumbs'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default BreadCrumbs;