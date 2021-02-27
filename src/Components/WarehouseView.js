import { useState } from 'react'

const WarehouseView = (props) => {
    const [editable,setEditable] = useState(false)
    const [warehouse,setWarehouse] = useState(props.location.warehouse)
    // const [city,setCity] = useState('')

    const setWarehouseInfo = async() =>{
        console.log(warehouse);
        
        /**  
         * Need to host api using express to send POST request
        */

        // await fetch(`../warehouses.json`,{
        //     method:'POST',
        //     headers:{
        //         "Content-type": "application/json; charset=UTF-8"
        //     },
        //     body: JSON.stringify(warehouse)
        // }).catch((e)=>console.log(e))

        
    }
    return (
        
            <div className="warehouse-expand">
                        
                    <div className="warehouse-expand-card">
                        <h2>{warehouse.name}</h2>
                        {
                            Object.keys(warehouse).map((key)=>{
                                
                                return(
                                    <p key={key}>{key}: {!editable?""+warehouse[key]:<input type="text" value={warehouse[key]} onChange={(e)=>setWarehouse({...warehouse,[key]:e.target.value})}/>}</p>          
                                )
                            })                        
                        }
                        {
                            editable ?
                            <button className="submit" onClick={setWarehouseInfo}>Set</button>:
                            <button className="edit" onClick={()=>setEditable(!editable)}>Edit</button>

                        }
                    </div>
                
            </div>
    )
}

// const ShowWarehouse = ({warehouse, makeEditable}) => {
//     console.log(warehouse)
//     return(
//         <div className="warehouse-expand-card">
//             <h2>{warehouse.name}</h2>
//             <p>City: {warehouse.city}</p>  
//             <p>Space: {warehouse.space_available}</p>  
//             <p>Type: {warehouse.type}</p>  
//             <p>Cluster: {warehouse.cluster}</p>  
//             <button className="edit" onClick={makeEditable}>Edit</button>
//         </div>
        
//     )
// }

// const EditWarehouse = ({warehouse}) => {
//     console.log(warehouse)
//     return(
//         <div className="warehouse-expand-card">
//             <h2>{warehouse.name}</h2>
//             <form>
//                 <span>City:</span> <input type="text" name="city" id="city"/>
//                 <span>Space:</span> <input type="text" name="space" id="space"/>
//                 <span>Type:</span> <input type="text" name="type" id="type"/>
//                 <span>Cluster:</span> <input type="text" name="cluster" id="cluster"/>  
//             </form>
//         </div>
        
//     )
// }
export default WarehouseView
