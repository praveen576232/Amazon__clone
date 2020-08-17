import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebaseApp';
function Header() {
 const [{ user,userfield }] = useStateValue();
const logout = () =>{
 
  if(user){
     auth.signOut();
  }
}

  return (
    <div className="app">
    
     <nav className="header">
        <div className="leftheader">
         
          <Link to="/">          
             <img className="amazon-logo" src="data:image/png;base64,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" alt=""></img>         
          </Link>
        </div>
        <div className="serach_header">
          <input placeholder="Search"></input>
         <div className="serach_icon_container">
         <SearchIcon className="serach_icon"></SearchIcon>
         </div>

        </div>
        <div className="right_header">
        
          
            <Link to={!user && "login"} className="header_link">
            <div onClick={logout} className="signin_link">
            <spam className="header_first_line">Hello,{ userfield ? userfield.userName :"" } </spam>
  <spam className="header_secend_line">{userfield && user ? " Sign out" :"Sign in"}</spam>
            </div>
          </Link>
       
          
                   <Link to="order" className="header_link">
            <div className="order">
            <spam className="header_first_line">return</spam>
             <spam className="header_secend_line">& order</spam>
            </div>

         </Link>
         <Link to="checkout" className="header_link">
            <div className="header_buket">
            <ShoppingCartIcon></ShoppingCartIcon>
             <spam>{userfield? userfield.basket.length : 0}</spam>
            </div>
         </Link>
         
        </div>
      </nav>
    
    </div>
  );
}

export default Header



