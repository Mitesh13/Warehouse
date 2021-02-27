import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Warehouses from './Components/Warehouses'
import WarehouseView from './Components/WarehouseView'
import Header from './Components/Header'
import './app.css'

function App() {

  const [warehouses,setWarehouses] = useState([])
  
  const getWarehouses = async () =>{
    const res = await fetch('warehouses.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    
    return await res.json()
  }

  const onSearch = () => {
    let id
    return async function debounced( warehouseName) {
      clearTimeout(id)
      id = setTimeout(async()=>{
        
          // console.log("called" + warehouseName);
          const data = await getWarehouses()
          if(warehouseName)
          {
            setWarehouses(data.filter(warehouse => warehouse.name.toLowerCase().includes(warehouseName.toLowerCase())))
          }
          else
          {
            
            setWarehouses(data)
          }
        
      },300)
    }
  }
  
  const applyFilter = async (city,cluster,rangeFrom, rangeTo) => {
    const data = await getWarehouses()
      
    setWarehouses(data.filter(warehouse => 
      (city ? warehouse.city.toLowerCase().includes(city.toLowerCase()) : true) &&
      (cluster ? warehouse.cluster.toLowerCase().includes(cluster.toLowerCase()) : true) &&
      (rangeFrom ? warehouse.space_available >= rangeFrom && warehouse.space_available <= rangeTo: true)
      ))
          
  }

  useEffect(()=>{
    return async function(){

      const data = await getWarehouses()
      // console.log("data:" +data);
      setWarehouses(data)
    }()
    
  },[])

  return (
    <Router>
      <div className="App">
        <Route path='/' exact render={(props)=>(
          <>
            <Header onSearch={onSearch()} applyFilter={applyFilter}/>
            <Warehouses warehouses={warehouses} />
          </>
        )}/>
        
        <Route path="/warehouse/" component={WarehouseView} />
        
      </div>
    </Router>
  );
}

export default App;
