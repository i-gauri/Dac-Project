import axios from "axios"
import { useEffect, useState } from "react"
import Usertable from "./Usertable"



const Admin2=()=>{
   

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers()
    },[])

    const accesstoken = localStorage.getItem("access");
    const authaxios = axios.create({
        baseURL :"http://localhost:7070/admin",
        headers :{
            Authorization : 'Bearer '+accesstoken
        }
         })

        const getUsers = ()=>{
        authaxios.get("/getAllCust").then((response)=>{        
                setUsers(response.data)           
        }).catch((error)=>{
            alert("Invalid Access")
        })
    }
    
    
  
    
    return (
    <div>
       
        
        <center>
            <div className="users">
                
                <h1>All USERS LIST</h1><br></br>
                <div>
                    <table className="table table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>USER EMAIL</th>                                
                                <th>MOBILE NUMBER</th>
                                <th>MOBILE NUMBER</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((User)=>{
                                return <Usertable User={User} />
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="back">
            <a href="/home">Back To Home</a>
            </div>
        </center>
    </div>
       
    )

}

export default Admin2
