import { Link } from 'react-router-dom'
import "../warehouse.css"

const Warehouse = ({warehouse}) => {
    return (
        <Link to={{pathname: `/Warehouse/view/${warehouse.id}`, warehouse: warehouse}}>

            <div className="warehouse">
            <h2>{warehouse.name}</h2>
            <p>City: {warehouse.city}</p>  
            <p>Space : {warehouse.space_available}</p>  
            <p>Type: {warehouse.type}</p>  
            <p>Cluster: {warehouse.cluster}</p>  
            </div>
        </Link>
    )
}


export default Warehouse
