import { useState } from 'react'

const WarehouseView = (props) => {
    const [editable,setEditable] = useState(false)
    const [addField,setAddField] = useState(false)
    const [warehouse,setWarehouse] = useState(props.location.state.warehouse)

    const setWarehouseInfo = async() =>{
        console.log(warehouse);
        setEditable(!editable)
        /**  
         * Need to host api using express to send POST request
        */

        await fetch(`../warehouses.json`,{
            method:'PUT',
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(warehouse)
        }).catch((e)=>console.log(e))
    }

    
    console.log(props.location.state)
    return (
            
            <div className="warehouse-expand">
                        
                <div className="warehouse-expand-card">
                    {/* {console.log(warehouse)} */}
                    <h2 className="warehouse-view-header">{warehouse.name}</h2>
                    
                        
                        {    
                            Object.keys(warehouse).map((key)=>{
                                
                                return(
                                    <div key={key} className={!editable?"table":""}>
                                        <p >{key}:</p> <p> {!editable?""+warehouse[key]:<input type="text" value={warehouse[key]} onChange={(e)=>setWarehouse({...warehouse,[key]:e.target.value})}/>}</p>          
                                    </div>
                                )
                            })  
                        }
                    
                    
                        {
                                addField ?
                                <CustomFieldContainer warehouse={warehouse} setWarehouse={setWarehouse} setAddField={setAddField}/>
                            :
                            ""
                        }
                        {
                            editable ?
                            
                            <div>
                                <button className="submit" onClick={setWarehouseInfo}>Set</button>
                                <button className="edit" onClick={()=>setAddField(!addField)}>{!addField? "Add Field" : "Cancel"}</button>
                            </div>
                            :
                            <button className="edit" onClick={()=>setEditable(!editable)}>Edit</button>
                            
                        }
                    {/* {
                        editable && addField ?
                        <button className="submit" onClick={setWarehouseInfo}>Set</button>:
                        <button className="edit" onClick={()=>setEditable(!editable)}>Edit</button>
                    } */}
                </div>
                
            </div>
    )
}

const CustomFieldContainer = ({warehouse,setWarehouse,setAddField}) =>{
    
    const [customField,setCustomField] = useState({})

    const addFieldToWarehouse = ({key,type,value}) =>{
        console.log(type);
        if(type === "boolean")
           value = (value === "true")
        else if(type === "number")
        {
            value = parseInt(value)
            if(isNaN(value))
            {
                alert("Please enter valid number")
                return
            }
        }
        
        console.log(key,value);
        if(key)
        {
            key = key.replaceAll(" ","_")
            setWarehouse({...warehouse,[key]:value})
        }
            
        
    }
    return(
        
        <div className="customFieldContainer">
            <div>
                <p> Key name:</p>
                <input type="text" name="customKey" id="customKey" onChange={(e)=>setCustomField({...customField,key:e.target.value})}/>
            </div>
            <div>
                <p> Key type:</p>
                <select name="customType" id="customType"  onChange={(e)=>setCustomField({...customField,type:e.target.value})}>
                    <option value="string" >String</option>
                    <option value="number">Number</option>
                    <option value="boolean">Boolean</option>
                </select>
            </div>
            {/* <input type="text" name="customType" id="" onChange={(e)=>setCustomField({...customField,type:e.target.value})}/> */}
            <div>
                <p> Value:</p>
                <input type="text" name="customValue" id="customValue" onChange={(e)=>setCustomField({...customField,value:e.target.value})}/>
            </div>
            <button onClick={(e)=>{
                e.stopPropagation()
                addFieldToWarehouse(customField)   
                setAddField(false)
                
            }}>Add</button>
        </div>
    )
}

export default WarehouseView
