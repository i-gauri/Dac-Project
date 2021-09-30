import React from 'react'
import Catertable from './catertable'
import { useEffect, useState } from "react"
import axios from 'axios'

const Bookcaterer = () => {
    const [providers, setProviders] = useState([])
    useEffect(()=>{
        getUsers()
    },[])

    var date = localStorage.getItem("date");

    const data = {
        "serviceType":"Caterer",
        "date":date
    }

    const accesstoken = localStorage.getItem("access");
    const authaxios = axios.create({
        baseURL :"http://localhost:7070/customer" ,
        headers :{
            authorization :'Bearer '+ accesstoken
        }
    })
    const getUsers = ()=>{ authaxios.post("/getDecorators", data).then((response)=>{
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

    return (
        <div>
        <center>
      <div  className="users">
          
          <h1>All USERS LIST</h1><br></br>
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
                          return <Catertable providers={providers} />
                      })}
                  </tbody>
              </table>
          </div>
      </div>
  </center>
  <div id="selection"></div>
  <a href="/confirmation">Skip Catering service</a>
   </div>
    )
}

export default Bookcaterer
