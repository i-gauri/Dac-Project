import React from 'react'


const Customer = () => {
    if(!localStorage.getItem("userinfo-cust")){
        return (window.location.href="/customerlogin"      )
    }

    const booking = ()=>{
        document.getElementById("onclick").innerHTML = "lets book";
    }

    const cancelation = ()=>{
        document.getElementById("onclick").innerHTML="hello"
    }


        

    
    return (
        <div align="left">
            <h1>Welcome {localStorage.getItem("userinfo-cust")}</h1>
            
            <a onClick={booking} href="/bookevent">Lets book an event</a>
            <br/>
            <a onClick={cancelation} href="/cancelevent">Change of Plan's??? cancel your an event? Click here</a>
            <div align="right" id="onclick">

            </div>
        </div>

    )

    
}

export default Customer
