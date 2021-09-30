import React, {useState}  from 'react';
import { NavLink,  } from 'react-router-dom';
import signpic from "../images/signup.svg";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [user, setUser] = useState({
        name: "", email: "", phone: "", lname: "", password: "", cpassword: ""
    });
    let his = useHistory();
    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        
        setUser({...user, [name]:value});
    }

            
    



    const PostData = (e)=>{
        
        const data ={
            "email":user.email,
           "password":user.password,
           "firstname":user.name,
           "lastname":user.lname,
           "contactNo":user.phone
        }
       
        e.preventDefault()
        console.log(data);
        axios.post("http://localhost:7070/customer/signup", data).then(response=>{
          console.log(response.data.errorDetails)
          alert("Registration Successful")
            window.location.href="/customerlogin";
        }).catch(error=>{console.log(error)
            alert("invalid details entered")
        })
        
    }
        
      
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form onSubmit={PostData} method="POST" className="register-form" id="register-form">
                                
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autocomplete="off"
                                        value={user.name}
                                        onChange={handleInputs}                                                                             
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="lname" id="lname" autoComplete="off"
                                        value={user.lname}
                                        onChange={handleInputs}                                        
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Your Email"
                                        required
                                    
                                    />
                                     <p id="em"></p>
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input  type="tel" name="phone" id="phone" autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInputs}
                                        pattern="[0-9]{10}" title="PLease Enter Valid Phone Number" 
                                        
                                        placeholder="Your Phone"
                                        required
                                    />
                                    <p id="ph"></p>
                                </div>

                                

                                 <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[#@$*]).{5,20}" title="Password Must be more than 6 letters and contain one of(special characters)"
                                        placeholder="Your Password"
                                        required
                                    />
                                    <p id="pass"></p>
                                </div>
                               
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="register"
                                     
                                    />
                                    {/* <button type="submit">submit</button> */}
                                </div>

                            </form>
                        </div>
                        
                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} alt="registration pic" />
                                </figure>
                                <NavLink to="/customerlogin" className="signup-image-link">I am already registered</NavLink>
                            </div>
                       
                    </div>
                </div>
           </section>
        </>
    )
}

export default Signup
