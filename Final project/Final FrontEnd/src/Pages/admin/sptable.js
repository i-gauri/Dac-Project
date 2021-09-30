import react from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

const Sptable = ({User}) => {
    const his = useHistory();

    const remove =(e)=>{
      const accesstoken = localStorage.getItem("access");
    const authaxios = axios.create({
        baseURL :"http://localhost:7070/admin",
        headers :{
            Authorization : 'Bearer '+accesstoken
        }
         });

            console.log(User.id);
           
             e.preventDefault()
            
            authaxios.delete("/deleteProvider/"+User.id).then(response=>{
              console.log(response)
              alert("Customer Deleted Successfully")
              window.location.reload();
            }).catch(error=>{console.log(error)
              alert(error)
            })
        }
        const approve =(e)=>{
            console.log(User.id);
           
             e.preventDefault()

             const accesstoken = localStorage.getItem("access");
    const authaxios = axios.create({
        baseURL :"http://localhost:7070/admin",
        headers :{
            Authorization : 'Bearer '+accesstoken
        }
         });

            
            authaxios.put("/updateProvider/"+User.id).then(response=>{
              console.log(response)
              alert("Provider Approved Successfully")
              window.location.reload();
            }).catch(error=>{console.log(error)
              alert(error)
            })
        }    
    
    
    return (
        
            <tr className="table-row">
                <td>{User.providerName}    </td>
                <td>{User.serviceType}</td>
                <td>{User.capacity}</td>
                <td>{User.rent}</td>
                <td>{User.status}</td>
                <td><button className="btn btn-warning" onClick={approve}>Approve provider</button></td>
                <td><button className="btn btn-warning"  onClick={remove}>Remove Provider</button></td>
                

               
                
            </tr>
        
    )
}

export default Sptable
