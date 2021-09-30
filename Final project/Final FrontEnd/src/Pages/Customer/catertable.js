import React from 'react'
import {useHistory} from "react-router-dom"

const Catertable = ({providers}) => {
    const his = useHistory();

    const booking =()=>{
        localStorage.setItem("service-cater", providers.providerName);
        localStorage.setItem("service-crent", providers.rent);
        localStorage.setItem("service-cservice", providers.serviceType);
        localStorage.setItem("service-cid", providers.id);
        his.push("/confirmation");
    }
    return (
        
            <tr className="table-row">
                <td>{providers.providerName}    </td>
                <td>{providers.serviceType}</td>
                <td>{providers.capacity}</td>
                <td>{providers.rent}</td>
                <td><button className="btn btn-warning" onClick={booking}>Select</button></td>

               
                
            </tr>
        
    )
}
export default Catertable
