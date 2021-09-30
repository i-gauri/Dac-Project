import axios from "axios";


const Usertable=({User})=>{
  

    const deleteuser  =()=>{
      const accesstoken = localStorage.getItem("access");
      const authaxios = axios.create({
        baseURL :"http://localhost:7070/admin",
        headers :{
            Authorization : 'Bearer '+accesstoken
        }
         })
        console.log(User.id);
       
        
        authaxios.delete("/deleteCust/"+User.id).then(response=>{
          console.log(response)
          alert("Customer Deleted Successfully")
          window.location.reload();
        }).catch(error=>{console.log(error)
          alert(error)
        })
    }

    return(
    
            <tr className="table-row">
                <td>{User.firstname}</td>
                <td>{User.lastname}</td>
                <td>{User.email}</td>
                <td>{User.contactNo}</td>
                <td><button className="btn btn-warning"  onClick={deleteuser}>Delete this User</button></td>
                
            </tr>
            
    )
}

export default Usertable