import React, {useState, useEffect} from 'react'
import Eventtable from './eventtable'
import axios from 'axios'

const Admin5 = () => {
    const [User, setUsers] = useState([])

    useEffect(()=>{
        getUsers()
    },[])

    const accesstoken = localStorage.getItem("access");
    const authaxios = axios.create({
        baseURL :"http://localhost:7070/admin",
        headers :{
            Authorization : 'Bearer '+accesstoken
        }
         });

    const getUsers = () =>{
        authaxios.get("/getAllEventDetails").then((response)=>{
        
                setUsers(response.data)
            
        
        }).catch((error)=>{
            alert("Invalid Access")

        })
    }
   
  
    
    return (
    <div>
       
        
        <center>
            <div className="users">
                
                <h1>All Bookings LIST</h1><br></br>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                            <th>Event Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Provider</th>                                
                                <th>Rent</th>
                                <th>Status</th>
                                <th>Date</th>
                                
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {User.map((User)=>{
                                return <Eventtable User={User} />
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
         
        </center>
    </div>
       
    )

}


export default Admin5
