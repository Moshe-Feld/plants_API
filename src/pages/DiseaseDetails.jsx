import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUrl } from "../services/service";
import DiseaseById from "../components/DiseaseById"
function DiseaseDetails() {
    let { id } = useParams();

    const [diseaseId, setDiseaseId] = useState([])
    const [status, setStatus] = useState(false)

    let fetchData = async () => {
        const diseaseIdData = await getUrl(`https://perenual.com/api/pest-disease-list?key=sk-6EfF6799f856c8caf8424&id=${id}`)
        setDiseaseId(diseaseIdData.data?.[0])
        setStatus(true)
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <>
            {
                status && diseaseId.length === 0 ? <p>Loading...</p> : <></>
            }
            <DiseaseById disease={diseaseId} />
        </>
    )
}
export default DiseaseDetails