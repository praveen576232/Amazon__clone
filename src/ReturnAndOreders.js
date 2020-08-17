import React from 'react'
import {useStateValue} from './StateProvider'
import './returnAndOrder.css';
function ReturnAndOreders() {
    const [ {userfield}] = useStateValue()
    return (
        <div className="return_and_order">
            {
            userfield &&   userfield?.orders?(
                   <div className="order_container">
                      { userfield.orders.map((order)=>
                            (
                                <div className="order_item_display">
                                   <div className="ordered_image">
                                    <img className="img_order" src={order.orderd_item.image} alt=""></img>
                                    </div>
                                   <div className="order_info">
                                   <h3>{order.orderd_item.title}</h3>
                                    <h3> <small>₹ </small>{order.orderd_item.price}</h3>
                                    
                                    <div className="ratings">
          {
               Array(order.orderd_item.rating)
               .fill()
               .map((_)=>
             <p>⭐</p>
               )
           }
          </div>
                                       </div>
                                      
                                            <div className="is_ordered">
                            <h4>{order.isordered? "order is deliverd":"order is on the way"}</h4>
                                                </div>
                                    </div>
                            )
                       )
                       }
                       
                   </div>
               ):(
                   <h2>Your order is Emtye</h2>
               )
            }
        </div>
    )
}

export default ReturnAndOreders
