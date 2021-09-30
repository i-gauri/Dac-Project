import React, {useState} from 'react';
import { NavLink, useHistory } from "react-router-dom";
import login from "../images/login.svg"
import axios from 'axios';

// import {UserContext} from "../App";

const CustomerLogin = () => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data ={
        "email":email,
        "password":password
    }

    const submithandler = (e)=>{
        e.preventDefault()
        console.log(email, password);
        axios.post("http://localhost:7070/customer/signin", data).then(response=>{
          console.log(response)
          console.log(response.data)
        localStorage.setItem("access", response.data.accessToken);
        localStorage.setItem("userinfo-cust",response.data.firstname);
        localStorage.setItem("userinfo-custid", response.data.id)
        window.location.href="/customer";
        }).catch(error=>{console.log(error)
                alert("invalid credentials")
        })
    
      }

    //   var cust = localStorage.getItem("userinfo-custid");
    //   if(cust){
    //       return( window.location.href="/customer")
    //   }else{

    return (
        <>
             <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                          
                            <div className="signin-image">
                                <figure>
                                    <img src={login} alt="Login pic" />
                                </figure>
                                <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                            </div>
                       
                        <div className="signin-form">
                            <h3 className="form-title">Customer Login</h3>
                            
                            <form method="POST" className="register-form" id="register-form">
                             

                                 <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your Email"
                                    />
                                </div>


                                 <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Your Password"
                                    />
                                </div>

                              
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit"
                                        value="Log In"
                                        onClick={submithandler}
                                    />
                                </div>

                            </form>
                        </div>
                      
                    </div>
                </div>
           </section>
       </>
    )
}

export default CustomerLogin
