import Filter from './Filter'
import { useState } from 'react'
import '../header.css'

const Header = ({onSearch, applyFilter}) => {

    const [search,setSearch] = useState("")

    const searchWarehouse = (value) => {
        console.log(value);
        setSearch(value)
        onSearch(value)
    }
    return (
        <div className="header">
            <input type="text" name="warehouseName" id="warehouseName" value={search} placeholder="Search warehouse name" onChange={(e)=>{
                setSearch(e.target.value)
                console.log(search);
                searchWarehouse(e.target.value)
            }}/>
            <Filter applyFilter={applyFilter} clearSearch={()=>setSearch("")}/>
        </div>
    )
}

export default Header
