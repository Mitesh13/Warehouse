import Warehouse from './Warehouse'

import "../warehouse.css"

const Warehouses = ({warehouses}) => {
    return (
        <div className="warehouse-container">
            
            {
                warehouses.length>0 ?
                
                (warehouses.map((warehouse)=>{
                    
                    return (
                        
                            <Warehouse key={warehouse.id} warehouse={warehouse} />

                
                    )
                })) : <p style={{padding: "20px", color:"red"}}>Oops! No warehouses found</p>
            }
                
        
        </div>
    )
}

export default Warehouses
