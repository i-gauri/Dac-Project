import {useHistory} from "react-router-dom"

const Providertable = ({providers}) => {
    const his = useHistory();

    const booking =()=>{
        localStorage.setItem("service-name", providers.providerName);
        localStorage.setItem("service-capacity", providers.capacity);
        localStorage.setItem("service-rent", providers.rent);
        localStorage.setItem("service-service", providers.serviceType);
        localStorage.setItem("service-id", providers.id);
        his.push("/bookdecor");
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

export default Providertable
