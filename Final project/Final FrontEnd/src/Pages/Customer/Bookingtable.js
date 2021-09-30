import React from 'react'
import axios from 'axios';

const Bookingtable = ({User}) => {
  const accesstoken = localStorage.getItem("access");
    const remove =(e)=>{
        console.log(User.id);
       
         e.preventDefault()
         const authaxios = axios.create({
          baseURL :"http://localhost:7070/customer" ,
          headers :{
              authorization :'Bearer '+ accesstoken
          }
      })
        
        authaxios.put("/cancelEvent/"+User.id).then(response=>{
          console.log(response)
          alert("Event Cancelled Successfully")
          window.location.reload();
        }).catch(error=>{console.log(error)
          alert("Invalid Access")
        })
    }
       


return (
    
        <tr className="table-row">
            <td>{User.customer.firstname}    </td>
            <td>{User.customer.lastname}</td>
            <td>{User.bookingDate}</td>
            <td>{User.serviceProvider.providerName}</td>
            <td>{User.status}</td>
            <td><button className="btn btn-warning" onClick={remove}>Cancel Booking</button></td>
            

           
            
        </tr>
    
)
}
export default Bookingtable
