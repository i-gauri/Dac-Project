import React from 'react'
import axios from 'axios';


const Confirmation = () => {
    var name = localStorage.getItem("service-name");
    var capacity = localStorage.getItem("service-capacity");
    var rent = localStorage.getItem("service-rent");
    let service = localStorage.getItem("service-service");
    var serviceid = localStorage.getItem("service-id");
    var custid = localStorage.getItem("userinfo-custid");
    
    var decorname = localStorage.getItem("service-decor");
    var did = localStorage.getItem("service-did");
    var catername = localStorage.getItem("service-cater");
    var cid = localStorage.getItem("service-cid");
    var decortype = localStorage.getItem("service-dservice");
    var drent = localStorage.getItem("service-drent");
    var crent = localStorage.getItem("service-crent");
    var catertype = localStorage.getItem("service-cservice");
   
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var day = today.getDate();
      
    if(month<10){
        month = "0"+(today.getMonth()+1);
    }
    if(day<10){
        month = "0"+today.getDate();
    }
    
   var date = localStorage.getItem("date");
   

    const data ={ "customer":{"id":custid},
    "serviceProvider":{"id":serviceid},
    "bookingDate":date}
    console.log(data)

    const book = () =>{
        const accesstoken = localStorage.getItem("access");
    const authaxios = axios.create({
        baseURL :"http://localhost:7070/customer",
        headers :{
            Authorization : 'Bearer '+accesstoken
        }
         });

        authaxios.post("/bookEvent", data).then(response=>{
            console.log(response)
            
              window.location.href="/customer";
          }).catch(error=>{console.log(error)
            alert("invalid Details")
          })

          if(decorname != "undefined"){
            const data ={ "customer":{"id":custid},
            "serviceProvider":{"id":did},
            "bookingDate":date}
        
                authaxios.post("/bookEvent", data).then(response=>{
                    console.log(response)
                    
                      window.location.href="/customer";
                  }).catch(error=>{console.log(error)
                    alert("invalid Details")
                  })
          }
          if(catername != "undefined"){
            const data ={ "customer":{"id":custid},
            "serviceProvider":{"id":cid},
            "bookingDate":date}
        
                authaxios.post("/bookEvent", data).then(response=>{
                    console.log(response)
                    alert("Booking Successful Please Login again to see your Bookings")
                    localStorage.clear();
                    
                      window.location.href="/customer";
                  }).catch(error=>{console.log(error)
                    alert("invalid Details")
                  })
          }
        
    }
    let trent = (parseInt(rent) + parseInt(drent) + parseInt(crent));
    console.log(trent);
    let totalbill = (trent/100)*23;
    
    let amt = totalbill + parseInt(trent);
    

    return (
        <div>
            <table class="table table-striped table-dark table-bordered ">
                <tr>
                    <td>Selected name of Venue is :</td>
                    <td>{name}</td>
                    </tr>
                <tr>
                    <td>The location type is : </td>
                    <td> {service}</td>
                </tr>
                <tr>
                    <td>Total capacity(Persons) : </td>
                    <td> {capacity}</td>
                </tr>
                <tr>
                    <td>Rent : </td>
                    <td>  {rent} </td>
                </tr>
                <tr>
                    <td>Selected name of Decorator is :</td>
                    <td>{decorname}</td>
                    </tr>
                    <tr>
                    <td>Rent of Decorator is :</td>
                    <td>{drent}</td>
                    </tr>
                    <tr>
                    <td>Selected name of Caterer is :</td>
                    <td>{catername}</td>
                    </tr>
                    <tr>
                    <td>Rent of Caterer is :</td>
                    <td>{crent}</td>
                    </tr>
                <tr>
                    <td>GST + Service Tax : </td>
                    <td>  {totalbill} INR</td>
                </tr>
                <tr>
                    <td>Total Billing Amount : </td>
                    <td>  {amt} INR </td>
                </tr>
                <tr >
                    <td></td>
                <button  class="btn btn-success" onClick={book} >Confirm</button>
                </tr>
            </table>
          
            
          
            <p>18% GST and 5% service tax is applicable</p>
        </div>
    )
}

export default Confirmation
