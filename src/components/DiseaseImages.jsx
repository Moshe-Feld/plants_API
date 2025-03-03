import { useState } from "react";

function DiseaseImages({ images, commonName }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <img className="img-list" src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" alt={commonName} />
        );
    }

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="image-slider">
            <button onClick={prevImage} disabled={images.length === 1}>{"<"}</button>
            <img className="img-list" src={images[currentIndex].small_url} alt={commonName} />
            <button onClick={nextImage} disabled={images.length === 1}>{">"}</button>
        </div>
    );
}

export default DiseaseImages;
