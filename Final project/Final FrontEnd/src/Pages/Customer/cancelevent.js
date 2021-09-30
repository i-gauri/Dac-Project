import axios from "axios"
import { useState, useEffect } from "react"
import Bookingtable from "./Bookingtable"




const Cancelevent = () =>{
    const [User, setUser] = useState([])

    useEffect(()=>{
        getUsers()
    },[])

    var data = localStorage.getItem("userinfo-custid");

    console.log(data)

    const accesstoken = localStorage.getItem("access");

    const getUsers = () =>{
        const authaxios = axios.create({
            baseURL :"http://localhost:7070/customer" ,
            headers :{
                authorization :'Bearer '+ accesstoken
            }
        })

        authaxios.post("/viewBookings/"+data).then((response)=>{
        
                setUser(response.data)
                
                console.log(response.data)
        
        }).catch((error)=>{
            alert("Invalid Access")

        })
    
   
    }
      
    
    return (
    <div>
       
        
        <center>
            <div className="users">
                
                <h1>Bookings On my service</h1><br></br>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date </th>                                
                                <th>Provider</th>
                                <th>Status</th>
                                <th>Approve Status</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {User.map((User)=>{
                                return <Bookingtable User={User} />
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
         
        </center>
    </div>
       
    )

}

export default Cancelevent 