import DiseaseImages from "./DiseaseImages"
function DiseaseById({ disease }) {
    if (!disease) return <p>Loading...</p>;
    console.log("Selected Disease:", disease);
    return (

        <div className="disease-container">
            <p>
                <strong>Common name: </strong>
                {disease.common_name || "N/A"}
            </p>
            <p>
                <strong>Scientific name: </strong>
                {disease.scientific_name || "N/A"}
            </p>
            <p>
                <strong>Family: </strong>
                {disease.family || "N/A"}
            </p>

            <strong>Host: </strong>
            {disease.host ? disease.host.join(", ") : "N/A"}

            <DiseaseImages images={disease.images} commonName={disease.common_name} />
            <strong>Description: </strong>
            {disease.description && disease.description.length > 0
                ? disease.description.map((desc, index) =>
                    <div key={index}>
                        <strong>{desc.subtitle}</strong>
                        <p>{desc.description}</p>
                    </div>)
                : "No description available"}



            <strong>Other names: </strong>
            {disease.other_name ? disease.other_name.join(", ") : "N/A"}


            <div>
                <strong>Solutions:</strong>
                {disease.solution && disease.solution.length > 0
                    ? disease.solution.map((sol, index) =>
                        <div key={index}>
                            <strong>{sol.subtitle}</strong>
                            <p>{sol.description}</p>
                        </div>)
                    : "No solutions available"}
            </div>

        </div>
    );
}

export default DiseaseById;
