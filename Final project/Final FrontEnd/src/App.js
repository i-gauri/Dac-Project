import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Adminlogin from './Pages/admin/adminlogin';
import Customerlogin from './Pages/Customer/customerlogin';
import ProviderLogin from './Pages/Serviceprovider/ProviderLogin';
import Home from './Pages/Home';
import customersignup from './Pages/customersignup';
import admin from './Pages/admin/admin';
import Contact from './Pages/Contact';
import Admin4 from './Pages/admin/admin4';
import Admin2 from './Pages/admin/admin2';
import About from "./About";
import Customer from './Pages/Customer/customer';
import Bookevent from './Pages/Customer/bookevent';
import Cancelevent from './Pages/Customer/cancelevent';
import Navbar from './Navbar';
import "./App.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './Pages/Customer/Signup';
import SPSignup from './Pages/Serviceprovider/SPSignup';
import Confirmation from './Pages/Customer/confirmation';
import servicepro from './Pages/Serviceprovider/servicepro';
import Mybookings from './Pages/Serviceprovider/mybookings';
import Service from './Pages/Service';
import Admin5 from './Pages/admin/admin5';
import Bookdecor from './Pages/Customer/Bookdecor';
import Bookcaterer from './Pages/Customer/Bookcaterer';

function App() {
  return (
    <Router>
      <Navbar/>
      
      <Switch>
        <Route path='/' exact component={Home} />
      <Route path='/adminlogin'  component={Adminlogin} />
		<Route path='/customerlogin' component={Customerlogin} />
    <Route path='/customersignup' component={customersignup} />
		<Route path='/splogin' component={ProviderLogin} />
    <Route path='/admin' component={admin} />
    <Route path='/admin2' component={Admin2} />
    
    <Route path='/Contact' component={Contact} />
    <Route path='/customer' component={Customer} />
    <Route path='/bookevent' component={Bookevent} />
    <Route path='/cancelevent' component={Cancelevent} />
    <Route path='/providerlogin' component={ProviderLogin} />
    <Route path='/w' component={Signup} />
    <Route path='/spsignup' component={SPSignup} />
    <Route path='/confirmation' component={Confirmation} />
    <Route path='/admin4' component={Admin4} />
    <Route path="/servicepro" component={servicepro}/>
    <Route path="/mybookings" component={Mybookings}/>
    <Route path="/service" component={Service}/>
    <Route path="/admin5" component={Admin5}/>
    <Route path="/about" component={About}/>
    <Route path='/bookdecor' component={Bookdecor} />
    <Route path='/bookcaterer' component={Bookcaterer} />

      </Switch>
     
    </Router>
    
  
  )
}

export default App
