function SpeciesItem({ plant }) {
    if (!plant) {
        return <p>Loading...</p>;
    }

    return (
        <div className="plant-container">
            {plant.default_image && plant.default_image.regular_url ? (
                <a href={plant.default_image.original_url} target="_blank" rel="noopener noreferrer">
                    <img className="defauld-img" src={plant.default_image.small_url} alt={plant.common_name} />
                </a>
            ) : (
                <img className="no-img" src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" alt={plant.common_name} />
            )}
            <h3>Basic</h3>
            <p> <strong>Common name:</strong> {plant?.common_name || "N/A"}</p>
            <p> <strong>Scientific name:</strong> {plant?.scientific_name || "N/A"}</p>
            <p> <strong>Type:</strong> {plant?.type || "N/A"}</p>
            <div> {plant?.description || "No description available"}</div>
            <hr />

            <h3>Characteristics</h3>
            <p><strong>Height:</strong> {plant?.dimension || "Unknown"}</p>
            <p><strong>Growth rate:</strong> {plant?.growth_rate || "Unknown"}</p>
            <p><strong>Cycle:</strong> {plant?.cycle || "Unknown"}</p>
            <p><strong>Lighting condition:</strong> {plant?.sunlight || "Unknown"}</p>
            <p><strong>Care level:</strong> {plant?.care_level || "Unknown"}</p>
            <p><strong>Watering:</strong> {plant?.watering || "Unknown"}</p>
            <hr />

            <h3>Climate and Durability</h3>
            <p><strong>Hardiness zones:</strong> {plant?.hardiness
                ? `${plant.hardiness.min} - ${plant.hardiness.max}`
                : "Not available"}
            </p>

            {plant?.hardiness_location?.full_url && (
                <p>
                    <strong>Locations:</strong>
                    <a href={plant.hardiness_location.full_url} target="_blank" rel="noopener noreferrer">
                        View Hardiness Map
                    </a>
                </p>
            )}
            <p><strong>Drought resistance: </strong> {plant?.drought_tolerant ? "Yes" : "No"}</p>
            <p><strong>Salt resistance: </strong> {plant?.salt_tolerant ? "Yes" : "No"}</p>

            <strong>Origin zones:</strong>
            <ul>
                {Array.isArray(plant?.origin)
                    ? plant.origin.map((i, index) => <li key={index}>{i}</li>)
                    : <li>No origin data</li>}
            </ul>
            <hr />
        </div>
    );
}
export default SpeciesItem;
