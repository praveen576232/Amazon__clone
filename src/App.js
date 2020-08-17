import React,{useEffect} from 'react';
import './App.css';
import Header from './Header.js'
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from './Home';
import {auth , db} from './firebaseApp'
import Siginpage from './Siginpage'
import SignUpPage from './SignUpPage';
import Checkout from './Checkout';
import {useStateValue} from './StateProvider'
import ReturnAndOreders from './ReturnAndOreders'
function App() {
  const[,dispacth]=useStateValue();
  useEffect(() => {
    
 const unsubscrib= auth.onAuthStateChanged((authUser)=>{
      if(authUser){
          //update user  
    db.collection("users").doc(authUser.displayName).onSnapshot((snapshot)=>{
     if(snapshot){
     
      dispacth({
        type:"SET_USER",
        user:authUser,
        userfield:snapshot.data()
    });
     }else{
      dispacth({
        type:"SET_USER",
        user:authUser,
        userfield:null
    });
     }
    })
     
      }else{
        dispacth({
          type:"SET_USER",
          user:null,
          userfield:null
      });
      }
  });
  return {
    unsubscrib
  }
},[]);
  return (
    <Router>
      <div>
      <Switch>
        <Route path="/login">
          <Siginpage></Siginpage>
        </Route>
        <Route path="/signUp">
          <SignUpPage></SignUpPage>
        </Route>
       
        <Route path="/order">
           <Header></Header>
          <ReturnAndOreders></ReturnAndOreders>
        </Route>
       
        <Route path="/checkout">
          <Header></Header>
         <Checkout></Checkout>
        </Route>
      
        <Route path="/">
          <Header></Header>
          <Home></Home>  
        </Route>
         <Route path=""> 
         
         </Route>
       
      </Switch>
      </div>
    </Router>
  );
}

export default App;
