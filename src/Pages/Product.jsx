import React, { useContext } from 'react';
import { ShopContext } from '../Components/Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  if (!all_products) return <div>Loading...</div>;

  const product = all_products.find((e) => e.id === Number(productId));

  if (!product) return <div>Product not found.</div>;

  return (
    <div>
      <BreadCrumbs product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;