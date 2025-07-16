import React, { createContext, useState } from 'react';
import all_products from '../Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[all_products[index].id] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());
  

  const addToCart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }

  const RemoveFromCart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

  }

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const itemInfo = all_products.find((product) => product.id === Number(item));
      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
  }
  return totalAmount.toFixed(2);
};

const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item];
        }
    }
    return totalItem;
}
const contextValue = { getTotalCartItems, getTotalCartAmount, all_products, cartItems,addToCart,RemoveFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
