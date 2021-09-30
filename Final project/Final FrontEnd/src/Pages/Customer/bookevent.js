import React from 'react'
import axios from "axios"
import {  useState } from "react"
import Providertable from './providertable'

const Bookevent = () => {
    
    const [u_email , setEmail] = useState('')
    const [u_password , setPassword] = useState('')
    const [providers, setProviders] = useState([])

 
    var x;
    const datech = ()=>{
         x= document.getElementById("bdate").value;
        console.log(x);
    }
    const accesstoken = localStorage.getItem("access");

    const validateUser = () =>{
        if(u_email.length === 0){
            alert("enter your least capacity")
        }
        else if(u_password.length === 0){
            alert("enter your max capacity")
        }
        else{
            const data = {
                "from":u_email,
                "to":u_password,
                "date":x
            }
            localStorage.setItem("date", x);
            const authaxios = axios.create({
                baseURL :"http://localhost:7070/customer" ,
                headers :{
                    authorization :'Bearer '+ accesstoken
                }
            })
            authaxios.post("/getEventList", data).then((response)=>{
                console.log(data)
                const result = response.data
                console.log(result)
                setProviders(response.data)
                if(response.data.length==0){
                    alert("No available venues for this date")
                }
               
                 }).catch((error)=>{
                    alert("Invalid Access")
                 })
            }  
        } 
        
        

    return (
        <>
        <h1 style={{textAlign: "center"}} className="page-title">Booking event</h1>
        <table  style={{ marginLeft: 480,marginTop:20, border:"solid", marginBottom:20,  width: "30%" }}>
            <tr  style={{align:"center"}}>
                <td>Min capacity</td>
                <td>
                <input onChange={(event) =>{
                    setEmail(event.target.value)
                }}
                 type="number" placeholder="Enter min capacity" />
                 </td>
            </tr>
            <tr>
            <td>Max capacity</td>
                <td>
                <input onChange={(event) =>{
                    setPassword(event.target.value)
                }}
                 type="number" placeholder="Enter max capacity" />
             </td>
            </tr>
            <tr>
            <td>Booking date: </td>
             <td>
            <input onChange={datech} onClick={datech} type="date" id="bdate" name="bdate"/>

                </td>
                
            </tr>
            
            <tr style={{textAlign:"center"}}>
                <td></td>
            <button className="btn btn-dark" onClick={validateUser}>Search </button>
            </tr>
        </table>            
                 <div>
       
        
       <center>
           <div  className="users">
               
               <h1>All Venues LIST</h1><br></br>
               <div >
                   <table  className="table table-hover">
                       <thead>
                           <tr className="table-dark">
                               <th>providerName</th>
                               <th>Service Type</th>
                               <th>Capacity</th>
                               <th>Rent</th>
                              
                               
                           </tr>
                       </thead>
                       <tbody>
                           {providers.map((providers)=>{
                               return <Providertable providers={providers} />
                           })}
                       </tbody>
                   </table>
               </div>
           </div>
       </center>
       <div id="selection"></div>
       
   </div>

                

        </>
    )
}

export default Bookevent
