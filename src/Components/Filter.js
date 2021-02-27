import {useState} from 'react'
const Filter = ({applyFilter}) => {
    const [showFilters, setShowFilters] = useState(false)
    const [city,setCity] = useState("")
    const [cluster,setCluster] = useState("")
    const [from,setFrom] = useState()
    const [to,setTo] = useState()
    return (
        <>
            <button onClick={()=>setShowFilters(!showFilters)}>Filter</button>
            {
                showFilters &&
                <div>
                    <input type="text" name="city" id="city" placeholder="City" onKeyUp={e=>setCity(e.target.value)}/>
                    <input type="text" name="cluster" id="cluster" placeholder="Cluster" onKeyUp={e=>setCluster(e.target.value)}/>
                    <span>From:</span> <input type="number" name="from" id="from" onKeyUp={e=>setFrom(e.target.value)} />
                    <span>To:</span> <input type="number" name="to" id="to" onKeyUp={e=>setTo(e.target.value)}/>
                    <button onClick={()=>{
                        console.log(city);
                        if((from && to) || (!from && !to))
                            applyFilter(city,cluster,from,to)   
                        else
                            alert("Please fill both range fields")
                    }}>Apply</button>
                </div>
            }
        </>
    )
}

export default Filter
