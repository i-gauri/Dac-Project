import React from 'react'

const servicepro = () => {
    var name = localStorage.getItem("userinfo-sp");
    if(name == "undefined"){
        
        return(<>
        <h1>You are not approved by admin yet</h1>
        <h3>Please Logout and wait for admin to approve</h3>
        <a href="/">Go back to home</a>
        </>)
    }

    return (
        <div>
           <h1>Welcome {name}</h1>

           <br/>
             <a href="/mybookings">See Event bookings on my service</a>
         
        </div>
    )
}

export default servicepro
