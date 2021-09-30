import axios from "axios"
import { useEffect, useState } from "react"
import Sptable from "./sptable"

const Mybookings = () => {
    const [User, setUser] = useState([])

    useEffect(()=>{
        getUsers()
    },[])

    var data = localStorage.getItem("userinfo-id");

    console.log(data)

    

    const getUsers = () =>{
        const accesstoken = localStorage.getItem("access");
        const authaxios = axios.create({
            baseURL :"http://localhost:7070/provider" ,
            headers :{
                authorization :'Bearer '+ accesstoken
            }
        })
        authaxios.get("/getCustomers/"+data).then((response)=>{
        
                setUser(response.data)
                
               
        
        }).catch((error)=>{
            alert(error)

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
                                <th>Contact No</th>                                
                                <th>Date</th>
                                <th>Status</th>
                                <th>Approve Status</th>
                                
                                
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

export default Mybookings
