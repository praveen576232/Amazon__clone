import React,{useEffect, useState} from 'react'
import './home.css'
import Product from './Product';
import {db } from './firebaseApp'
function Home() {
  const [products,setProduct]=useState([])
  useEffect(() => {
    db.collection("amazon").onSnapshot((documents)=>{
     if(documents){
       setProduct(
         documents.docs.map(document =>({
          
                  id:document.id,
                  title:document.data().title,
                  image:document.data().image,
                  price:document.data().price,
                  rating:document.data().rating
          
         }))
         
       )
     }
    })
   
  }, [])
    return (
        <div className="home"> 
        <div className="slider">
        <img className="slide_img"  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
        </div>
        <div className="list_product">
     
       {
      
      products.map((product)=>
         (
          <Product
          key={product.id}
           title= {product.title}
         image=  {product.image} 
         price= {product.price}
         rating={product.rating}
         />

        )
      )
       }
       
     
           
            </div>
        </div>
    )
}

export default Home
