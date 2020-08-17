import { db } from './firebaseApp';

import firebase from 'firebase';
export const intialState ={
  

  
   user:null,
   userfield:null
};

function reducer(state,action){
    console.log(action);
      switch (action.type) {
          case 'OREDR_CONFORM':
            if(state.userfield?.basket && state.userfield?.basket.length !==0){
               state.userfield.basket.map((item)=>{
                   console.log("item is --> ",item);
               return db.collection("users").doc(state.user.displayName)
                .update({
                    orders: firebase.firestore.FieldValue.arrayUnion({
                    orderd_item:item,
                  
                    isordered:false
                  })
                }).then((_)=>{
                    db.collection("users").doc(state.user.displayName)
                    .update({
                        basket:[]
                    })     
                })
                .catch((err)=>alert(err.message))
               });
              



         
            }
            return{
                ...state
            }
          case 'ADD_ORDER':
            db.collection("users").doc(state.user.displayName)
            .update({
                address:action.order
            }).catch((err)=>alert(err.message));
            return {
                ...state
            }
          case 'ADD_SHIPING_ADDERS':
              db.collection("users").doc(state.user.displayName)
              .update({
                shipingAdress:action.addressInfo
              }).catch((err)=>alert(err.message));
              return {
                  ...state
              }
          case 'ADD_TO_BASKET':
            if(state.user && state.user.displayName){
                db.collection("users").doc(state.user.displayName)
                .update({
                    basket: firebase.firestore.FieldValue.arrayUnion(
                      action.item  
                    )
                })    
            }
             return {
                 ...state,
                 
                 
             }; 
            
          case 'REMOVE_ITEM_FROM_BASKET':
           console.log(action);     

              
                if(state.user && state.user.displayName){
                    db.collection("users").doc(state.user.displayName).update({
                       basket:firebase.firestore.FieldValue.arrayRemove(action.item) 
                    })
                }else{
                    console.warn("can't remove item");
                }
                return{
                    ...state,
                  
                }

            case 'SET_USER':
                return{
                    ...state,
                    user:action.user,
                    userfield:action.userfield
                }
           

          default:
              return state;
            
      }
}
export default reducer;