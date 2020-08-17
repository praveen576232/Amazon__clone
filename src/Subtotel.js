import './subtotel.css';
import React,{useState} from 'react'
import { useStateValue } from './StateProvider'
import { useHistory  } from 'react-router-dom'
import Modal from '@material-ui/core/Modal';
function Subtotel() {
    const history = useHistory();
    const [{ userfield },dispatch] = useStateValue();
    const [address,setAddress] = useState("");
    const [name,setName] = useState("");
    const [phone,setphone] = useState("")
    const[hideAddres,setHideAddres]=useState(false);
    const[openModel,setModel]=useState(false);
    const conformOrder = (e)=>{
      e.preventDefault();
      if(userfield?.shipingAdress){
        dispatch({
            type:"OREDR_CONFORM"
        })
        setModel(true);
      }else{
          alert("Add your shiping Address");
      }
     
    }
    const addAdress = (e)=>{
        e.preventDefault();
        setHideAddres(true);
    }
    const closeModel = (e) =>{
        e.preventDefault();
        history.push("/");
        setModel(false);
    }
    const removeAddressButton = (e)=>{
        e.preventDefault();
         if(name && phone && address){
            dispatch({
                type:"ADD_SHIPING_ADDERS",
                addressInfo:{
                    name:name,
                    phone:phone,
                    address:address
                }
            })
         }else{
             alert("please give curret input")
         }
        setHideAddres(false);
        
    }
    
const   getTotlePrice = () =>{
       let totle=0;
        if(userfield){
            if(userfield?.basket && userfield.basket?.length !==0){
                userfield.basket.map((item)=>{
                   return totle=totle + item.price;
                })
            }else{
                return totle;

            }
           
        }
        return totle;
    }
  
    return (
        <div className="subtotle_conatiner">
            <Modal className="model"
  disablePortal={true}
  disableEnforceFocus={true}
  disableAutoFocus={true}
  open={openModel}
>
  <div className="model_items">
    <h2 >Thanks for Order</h2>
   
    <button onClick={closeModel}>Go TO Home</button>
  </div>
</Modal>
            <div className="totle_item_count">
                <p>
                    <spam>Subtotle ({userfield?.basket?.length} items) :</spam>
                     <h2>{getTotlePrice()}</h2>
                </p>
            </div>
            <div>
               {
                   userfield && userfield?.shipingAdress? (
                  <div>
                              <p>address: {userfield.shipingAdress.name}</p>
                   <p>address: {userfield.shipingAdress.address}</p>
                   <p>phone number: {userfield.shipingAdress.phone}</p>
                       
                         


                  </div>
                   ):
                   hideAddres ?(
                    <div className="shipingAdress">
                    <h2>Add your Address</h2>
                    <div className="shiping_addres_name">
                    <h5>Name</h5>
                   <input  value={name} onChange={(e)=>setName(e.target.value)}></input>
                     <h5>Address</h5>
                   <input  value={address} onChange={(e)=>setAddress(e.target.value)}></input>
                   <h5>Phone number</h5>
                    <input   value={phone} onChange={(e)=>setphone(e.target.value)} ></input>
                   
                   
                    <button onClick={removeAddressButton}>Conform Addres</button>
                   </div>
                
               
                </div>
                ):(
                    <button onClick={addAdress}>Add your Shiping Address</button>
                )
                   
                 
                   
               }
                </div>

            <div className="checkbox_and_text">
                <input type="checkbox"></input>
                <p>This  order conatins a gift</p>
            </div>
          
            <button onClick={conformOrder} className="proceed_button">
            proceed to checkout
            </button>
        </div>
    )
}

export default Subtotel
