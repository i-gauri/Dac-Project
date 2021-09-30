import axios from "axios"
import { useEffect, useState } from "react"
import Sptable from "./sptable"



const Admin4=()=>{
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
        authaxios.get("/getAllProviders").then((response)=>{
        
                setUsers(response.data)
            
        
        }).catch((error)=>{
            alert("Invalid Access")

        })
    }
   
  
    
    return (
    <div>
       
        
        <center>
            <div className="users">
                
                <h1>All Providers LIST</h1><br></br>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Capacity</th>                                
                                <th>Rent</th>
                                <th>Status</th>
                                <th>Approve Status</th>
                                <th>Remove Provider</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {User.map((User)=>{
                                return <Sptable User={User} />
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
         
        </center>
    </div>
       
    )

}

export default Admin4
