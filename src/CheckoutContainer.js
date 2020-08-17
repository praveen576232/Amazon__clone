import React from 'react';
import './checkoutConatiner.css'
import {useStateValue} from './StateProvider'
function CheckoutContainer({id, title, image, price, rating }) {
    const [,dispach]=useStateValue();
    function removeitems(){
        dispach({
            type:'REMOVE_ITEM_FROM_BASKET',
           item:{
            title:title,
            image:image,
            price:price,
            rating:rating
           }
        })
    }
    return (
        <div className="ItemContainer">
          
           
                
                <div className="card_image_container">
                    <img src={image} alt=""></img>
                </div>
                <div item_price_and_rating_info>
                     <div className="item_title_display">
                        <h2>{title}</h2>
                     </div>
                    <p className="product_price">
                        <small>₹</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="ratings">
                        {
                            Array(rating)
                                .fill()
                                .map((_) =>
                                    <p>⭐</p>
                                )
                        }
                    </div>

                    <button onClick={removeitems} className="remove_from_basket" >Remove from Basket</button>
                </div>
                <div>

               
            </div>
        </div>
    )
}

export default CheckoutContainer
