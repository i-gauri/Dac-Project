import React from 'react'

const Eventtable = ({User}) => {
  

       

    return(
    
            <tr className="table-row">
                <td>{User.id}</td>
                <td>{User.customer.firstname}</td>
                <td>{User.customer.lastname}</td>
                <td>{User.serviceProvider.providerName}</td>
                <td>{User.serviceProvider.rent}</td>
                <td>{User.status}</td>
                <td>{User.bookingDate}</td>
                
                
            </tr>
            
    )
}

export default Eventtable
