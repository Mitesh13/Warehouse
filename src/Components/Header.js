import Filter from './Filter'
import '../header.css'

const Header = ({onSearch, applyFilter}) => {
    return (
        <div className="header">
            <input type="text" name="warehouseName" id="warehouseName" placeholder="Search warehouse name" onKeyUp={(e)=>onSearch(e.target.value)}/>            
            <Filter applyFilter={applyFilter}/>
        </div>
    )
}

export default Header
