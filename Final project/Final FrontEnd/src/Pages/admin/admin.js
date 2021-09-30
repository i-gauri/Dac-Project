import React from 'react'



const admin = () => {
    let uname=localStorage.getItem("userinfo-admin");

    

    
   
    return (
        <>
        <h2>Welcome {uname} </h2>
        <br/>
        <a href="/admin2">Get all Customers</a>
        
        <br/>
        <a href="/admin4">Get all Providers</a>
        <br/>
        <a href="/admin5">Get all Events Booked</a>

    </>
    )
    
}




export default admin

