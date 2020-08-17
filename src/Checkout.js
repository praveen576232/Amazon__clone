import React from 'react'
import {useStateValue} from './StateProvider';
import CheckoutConatiner from './CheckoutContainer'
import Subtotel from './Subtotel'
import './checkout.css'
function Checkout() {
    const [{ userfield }] = useStateValue();
    return (
      <div>
          {
       userfield?.basket?.length ===0 ?
           (  <h1>No item was selected</h1>)
           :(
               <div className="checkout_box">
         
                
                <div className="display_checkout_list">
                   { userfield?.basket.map((item)=>(
            <CheckoutConatiner
           
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
           ))}
         


             </div>
              <div className="subtotle">
                 <Subtotel></Subtotel>
              </div>

       </div>
           )
          }
          </div>
    )
}

export default Checkout
