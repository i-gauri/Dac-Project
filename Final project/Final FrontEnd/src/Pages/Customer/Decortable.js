import {useHistory} from "react-router-dom"

const Decortable = ({providers}) => {
    const his = useHistory();

    const booking =()=>{
        localStorage.setItem("service-decor", providers.providerName);
        localStorage.setItem("service-drent", providers.rent);
        localStorage.setItem("service-dservice", providers.serviceType);
        localStorage.setItem("service-did", providers.id);
        his.push("/bookcaterer");
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

export default Decortable