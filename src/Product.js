import React from 'react'
import './product.css';

import { useStateValue } from './StateProvider'
function Product({title,image,price,rating}) {
    const [{user},dispatch] = useStateValue();
    function alertDilog(){
      alert("user is not sign in please sigin ");
     
    }
    function addtobasket(){
      dispatch({
          type:'ADD_TO_BASKET',
          item:{
             
              title:title,
              image:image,
              price:price,
              rating:rating
          }
      });
    }
    return (
        <div className="product">
            <p className="product_title">{ title }</p>
            <img src={image} alt=""></img>
            <p className="product_price">
               <small>₹</small>
               <strong>{ price }</strong>
            </p>
          <div className="ratings">
          {
            
               Array(parseInt(rating))
               .fill()
               .map((_)=>
          <p>
             ⭐
            </p>)
               
           }
          </div>
          
          <button className="button_cart" 
          onClick={
            user === null | undefined ? alertDilog
            :addtobasket
          }
            >Add to Cart</button>
        </div>
    )
}

export default Product
