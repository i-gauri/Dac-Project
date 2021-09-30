import React,{Component} from 'react';
import axios from 'axios';

class spsignup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:'',
       password:'',
       providerName:'',
       serviceType:'',
       contactNo:'',
       rent:'',
       capacity:''
    }
  }
  


  changehandler = (e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  submithandler = (e)=>{
    e.preventDefault()
    console.log(this.state);
    axios.post("http://localhost:7070/provider/signup", this.state).then(response=>{
      console.log(response)
      document.getElementById("username").innerHTML="welcome "+response.data.providerName;

    }).catch(error=>{console.log(error)
      document.getElementById("username").innerHTML="invalid details";
    })
    
  }
  
  render(){

    const {email, password, providerName, serviceType, contactNo, rent, capacity} = this.state
  return (
    <div>
      <h2>Customer Login Form</h2>
    <form onSubmit={this.submithandler}>
  
        <div >
            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Username" name="email" required value={email} onChange={this.changehandler}/>
  
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required value={password} onChange={this.changehandler}/>

            <label><b>provider Name</b></label>
            <input type="text" placeholder="Enter " name="providerName" required value={providerName} onChange={this.changehandler}/>
            
            <label><b>service Type</b></label>
            <input type="text" placeholder="Enter " name="serviceType" required value={serviceType} onChange={this.changehandler}/>
            
            <label><b>Contact</b></label>
            <input type="number" placeholder="Enter " name="contactNo" required value={contactNo} onChange={this.changehandler}/>

            <label><b>rent</b></label>
            <input type="number" placeholder="Enter " name="rent" required value={rent} onChange={this.changehandler}/>

            <label><b>capacity</b></label>
            <input type="number" placeholder="Enter " name="capacity" required value={capacity} onChange={this.changehandler}/>

            <button type="submit">Login</button>
            
        </div>
      </form>
      <div id="username">

      </div>
    </div>
  )
}
}

export default spsignup