import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { getUrl } from "../services/service";
import SpeciesItem from "../components/SpeciesItem";

function PlantDetails(){
    let { id } = useParams();
    const [plantSpecies, setPlantSpecies] = useState({})
    const [status, setStatus] = useState(false)
    let fetchData = async ()=>{
        const detailsData = await getUrl(`https://perenual.com/api/species/details/${id}?key=sk-6EfF6799f856c8caf8424`)
        setPlantSpecies(detailsData);
        setStatus(true)
        console.log(plantSpecies)
    }
    useEffect(()=>{
        fetchData();
    },[id]);

    if (!plantSpecies) return <p>No data available</p>;
    
    return(
        <>
        {
           status && plantSpecies.length === 0 ? <p>Loading...</p> : <></>
        }
    <SpeciesItem plant={plantSpecies}/>
        </>
    )
}

export default PlantDetails;