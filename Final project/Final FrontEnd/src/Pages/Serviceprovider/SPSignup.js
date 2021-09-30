import React, {useState}  from 'react';
import { NavLink,  } from 'react-router-dom';
import signpic from "../images/signup.svg";
import axios from 'axios';

const SPSignup = () => {
    const [user, setUser] = useState({
        name: "", email: "", phone: "", rent:"", serviceType: "", password: "", capacity: ""
    });
    // email, password, providerName, serviceType, contactNo, rent, capacity
    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        
        setUser({...user, [name]:value});
    }

    const data ={
        "email":user.email,
       "password":user.password,
       "providerName":user.name,
       "serviceType":user.serviceType,
       "contactNo":user.phone,
       "rent":user.rent,
       "capacity":user.capacity
    }

    const PostData = (e)=>{
        e.preventDefault()
        console.log(data);
        axios.post("http://localhost:7070/provider/signup", data).then(response=>{
          console.log(response)
          alert("Registration Successful")
            window.location.href="/providerlogin";
        }).catch(error=>{console.log(error)
          alert("invalid Details")
        })
        
      }
     
   
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" onSubmit={PostData} className="register-form" id="register-form">
                                
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autocomplete="off"
                                        value={user.name}
                                        onChange={handleInputs}
                                        
                                        placeholder="Venue Name"
                                        required
                                    />
                                </div>
                                <div >
                                    <label htmlFor="work">
                                    
                                    </label>
                                    <select style={{width:380}} id="serviceType" name="serviceType" value={user.serviceType} onChange={handleInputs}>
                                        <option value="select">Select Service Type   </option>
                                        <option value="Decorator">Decorator</option>
                                        <option value="Ceremony Hall">Ceremony Hall</option>
                                        <option value="Caterer">Caterer</option>
                                        </select>
                                    {/* <input type="text" name="serviceType" id="serviceType" autoComplete="off"
                                        value={user.work}
                                        onChange={handleInputs}                                        
                                        placeholder="service Type "
                                        required
                                    /> */}
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
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="tel" name="phone" id="phone" autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInputs}
                                        pattern="[0-9]{10}" title="PLease Enter Valid Phone Number"                                                                             
                                        placeholder="Your Phone"
                                        required
                                    />
                                </div>

                                

                                 <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[#@$*]).{5,20}" title="Password Must be more than 6 and contain one of(special characters)"
                                        placeholder="Your Password"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="number" name="capacity" id="capacity" autoComplete="off"
                                        value={user.capacity}
                                        onChange={handleInputs}
                                        placeholder="Your Capacity"
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="number" name="rent" id="rent" autoComplete="off"
                                        value={user.rent}
                                        onChange={handleInputs}
                                        placeholder="Your rent"
                                        required
                                    />
                                </div>
                               
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="register"
                                     
                                    />
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


export default SPSignup
