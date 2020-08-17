import React,{useState} from 'react'
import {auth ,  db} from './firebaseApp';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import   './signuppage.css';




function SignUpPage() {
    const [userName,setUserName] = useState("");
    const [userNumber,setNumber] = useState("");
    const [userEmail,setEmail] = useState("");
    const [userPassword,setPassword] = useState("");
    const [userRePassword,setRePassword] = useState("");
    const history = useHistory();
   

    function submitForm(e){
        e.preventDefault()
     if(userName || userEmail || userPassword ||  userPassword){
     if(userPassword?.length>6 ){
         if(userPassword === userRePassword){
            auth.createUserWithEmailAndPassword(userEmail,userPassword)
            .then((authUser)=>{
            

                if(authUser){
                    auth.currentUser.updateProfile({
                        displayName:userNumber
                    });
                }
                db.collection("users").doc(userNumber).set({
                    email:userEmail,
                    userName:userName,
                    basket:[],
                    orders:[]
                });
              
               history.push("/")
            }).catch((error)=>{
               alert(error.message); 
             
            });
         }
     }else{
        
         alert("length of password is grater than 6");
       
     }
     }else{
         alert("please give a current input value");
        
     }
  
    }
    return (
        <div className="sign_up_page">
             <div className="amazon_logo">
            <Link to="/">          
             <img className="amazon-logo" src="data:image/png;base64,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" alt=""></img>         
          </Link>
            </div>
           <div className="sign_up_form_text">
         
          
            <h1>Create account</h1>
            <h5>Your name</h5>
            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} ></input>
            <h5>Phone number</h5>
            <input type="number" value={userNumber} onChange={(e)=>setNumber(e.target.value)}  ></input>
            <h5>Email</h5>
            <input type="email" value={userEmail} onChange={(e)=>setEmail(e.target.value)}  ></input>
            <h5>Password</h5>
            <input type="password" placeholder="At least 6 charactors" value={userPassword} onChange={(e)=>setPassword(e.target.value)}  ></input>
            <h6>Passwords must be at least 6 charactors</h6>
            <h5>Re-enter Password</h5>
            <input type="password" value={userRePassword} onChange={(e)=>setRePassword(e.target.value)}  ></input>
           
          <button className="sign_up_page_link" onClick={submitForm}>Sign Up</button>
          <p className="sign_up_form_conditions">
              By creating an account, you agree to Amazon's <em>Conditions of Use</em> and <em>Privacy Notice</em>.
          </p>

               </div>
            
               <div className="new_to_amazon">
                 <p className="text">Alerdy hava a acount?</p>
                 <Link className="signin_button" to="/login">
                     <p>Sign in?</p>
                     </Link>
           </div>
        </div>
    )
}

export default SignUpPage
