import { useEffect, useState } from "react";
import { getUrl } from "../services/service";
import DiseaseDetails from "./DiseaseDetails";
import { NavLink } from "react-router";

function DiseaseData() {
    const [parameters, setParameters] = useState({ page: 1, q: "", id: 0 });
    const [finalURL, setFinalURL] = useState("");
    const [disease, setDisease] = useState([]);
    const [status, setStatus] = useState(false);

    return (
        <section>
            <>
                <h1>Disease List</h1>
                <div className="search-box">
                    <input className="search-input" placeholder="Type to Search..." type="text" onChange={(e) => setParameters({ ...parameters, q: e.target.value })} />
                    <button className="btn-search"
                        onClick={async () => {
                            setStatus(true)
                            const qData = await getUrl(`https://perenual.com/api/pest-disease-list?key=sk-6EfF6799f856c8caf8424q=${parameters.q}`)
                            console.log(qData)
                            setDisease(qData.data)
                            if (parameters.q !== "" && disease.length < 1 && status) {
                                setStatus(false);
                                alert(parameters.q + " is undefine")
                            }
                        }}>🔍</button>
                </div>

                <button className="get"
                    onClick={async () => {
                        setStatus(true);
                        const diseaseData = await getUrl("https://perenual.com/api/pest-disease-list?key=sk-6EfF6799f856c8caf8424");
                        setDisease(diseaseData.data || []);
                    }}
                >
                    Get All Disease
                </button>

                {status && disease.length === 0 ? <p>Loading...</p> : null}

                <div className="list">
                    {disease.map((item) => (
                        <div>
                            <NavLink to={`/disease-details/${item.id}`}>
                                <div className="item"
                                    key={item.id}
                                >
                                    {item.common_name} <br />
                                    {
                                        item.images?.[0]?.small_url ? (
                                            <img src={item.images[0].small_url} alt={item.common_name} />
                                        ) : (
                                            <img className="no-img" src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" alt={item.common_name} />
                                        )
                                    }
                                    <hr />
                                </div>
                            </NavLink>
                        </div>

                    ))}
                </div>

                <div className="box-dir" style={{ display: disease.length ? "block" : "none" }}>
                    <div className="dir">
                        <button
                            disabled={parameters.page <= 1}
                            onClick={async () => {
                                setDisease([]);
                                setParameters({ ...parameters, page: parameters.page - 1 });
                                const prevPage = await getUrl(`https://perenual.com/api/pest-disease-list?key=sk-6EfF6799f856c8caf8424&page=${parameters.page}`);
                                setDisease(prevPage.data);
                            }}
                        >
                            &larr;
                        </button>
                        <div className="num">{parameters.page}</div>
                        <button
                            disabled={parameters.page >= disease.length}
                            onClick={async () => {
                                setDisease([]);
                                setParameters({ ...parameters, page: parameters.page + 1 });
                                const nextPage = await getUrl(`https://perenual.com/api/pest-disease-list?key=sk-6EfF6799f856c8caf8424&page=${parameters.page}`);
                                setDisease(nextPage.data);
                            }}
                        >
                            &rarr;
                        </button>
                    </div>
                </div>
            </>


        </section>
    );
}

export default DiseaseData;
