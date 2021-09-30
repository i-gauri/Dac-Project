import React,{Component} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

class customersignup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',
       password:'',
       firstname:'',
       lastname:'',
       contactNo:''
    }
  }
  


  changehandler = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  submithandler = (e)=>{
    e.preventDefault()
    console.log(this.state);
    axios.post("http://localhost:7070/customer/signup", this.state).then(response=>{
      console.log(response)
      document.getElementById("username").innerHTML="welcome "+response.data.firstname;

    }).catch(error=>{console.log(error)
      document.getElementById("username").innerHTML="invalid details";
    })
    
  }
  
  render(){

    const {email, password, firstname, lastname, contactNo} = this.state
  return (
    <div>
      <h2>Customer Login Form</h2>
    <form onSubmit={this.submithandler}>
  
        <div >
            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Username" name="email" required value={email} onChange={this.changehandler}/>
  
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required value={password} onChange={this.changehandler}/>

            <label><b>First name</b></label>
            <input type="text" placeholder="Enter " name="firstname" required value={firstname} onChange={this.changehandler}/>
            
            <label><b>Last name</b></label>
            <input type="text" placeholder="Enter " name="lastname" required value={lastname} onChange={this.changehandler}/>
            
            <label><b>Contact</b></label>
            <input type="number" placeholder="Enter " name="contactNo" required value={contactNo} onChange={this.changehandler}/>

            <button type="submit">Login</button>
            
        </div>
      </form>
      <div id="username">

      </div>
    </div>
  )
}
}

export default customersignup