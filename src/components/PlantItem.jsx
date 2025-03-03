import { NavLink } from "react-router"
function PlantItem({ item }) {
    return (
        <NavLink to={`/plant-details/${item.id}`}>
        <div className="item" >
            <h3>{item.common_name}</h3>
            {item.default_image && item.default_image.regular_url ? (
                <img className="defauld-img" src={item.default_image.small_url} alt={item.common_name} />
            ) : (
                <img className="no-img" src = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" alt={item.common_name}/> 
            )}
        </div>
        </NavLink>
    )
}

export default PlantItem