import PlantItem from "./PlantItem"

function PlantList({plants}){
    return(
        <div className="list">
        {
            plants.map(item => <PlantItem item={item}/>)
        }
        </div>
    )
}

export default PlantList