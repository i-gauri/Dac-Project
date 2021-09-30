import axios from "axios";

const Sptable = ({User}) => {


    
        const approve =(e)=>{
            
            const accesstoken = localStorage.getItem("access");
             e.preventDefault()
             const authaxios = axios.create({
              baseURL :"http://localhost:7070/provider" ,
              headers :{
                  authorization :'Bearer '+ accesstoken
              }
          })
            
            authaxios.put("/updateEventStatus/"+User.id).then(response=>{
              console.log(response)
              alert("Booking Approved Successfully")
              window.location.reload();
            }).catch(error=>{console.log(error)
              alert(error)
            })
        }    
    
    
    return (
        
            <tr className="table-row">
                <td>{User.customer.firstname}    </td>
                <td>{User.customer.lastname}</td>
                <td>{User.customer.contactNo}</td>
                <td>{User.bookingDate}</td>
                <td>{User.status}</td>
              
                <td><button className="btn btn-warning"  onClick={approve}>Approve Booking</button></td>
             
                

               
                
            </tr>
        
    )
}

export default Sptable
