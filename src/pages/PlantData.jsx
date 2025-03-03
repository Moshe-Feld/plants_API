import { useEffect, useState } from 'react'
import PlantList from '../components/PlantList';
import { getUrl } from '../services/service';
function PlantData() {

  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ page: 1, q: "", order: "", cycle: "", sunlight: "", hardiness: null })
  const [finalURL, setFinalURL] = useState("")
  const [plants, setPlants] = useState([]);
  const [status, setStatus] = useState(false);

  const filterSelect = () => {
    return Object.keys(filters).filter(
      (key) => filters[key] !== null && filters[key] !== ""  && key !== "page" && key !== "q"
    ).length;
  };

  function buildUrl() {
    const PLANTS_LIST_URL = `https://perenual.com/api/species-list?key=sk-6EfF6799f856c8caf8424`;
    let query = "";

    for (let key of Object.keys(filters)) {
      if (filters[key] !== null && filters[key] !== "") {
        if (key === "page") {
          query += `&${key}=${filters[key]}&`
        }
        else {
          query += `${key}=${filters[key]}&`
        }

      }
    }

    if (query.endsWith("&"))
      query = query.substring(0, query.length - 1);

    if (filters.q !== "")
      query = `&q=${filters.q}`;

    setFinalURL(`${PLANTS_LIST_URL}${query}`);

    console.log(finalURL)
  };



  useEffect(() => {
    buildUrl()
    console.log(finalURL)
  }, [filters])
  if(!plants) return <p>No Data Avelible</p>

  return (
    <section>
      <h1>Plant List</h1>
      {showFilters && (
        <div className='desktop'>
          <div className='window'>
            <div>
              <h3>Edible: </h3>
              <input
                type="radio"
                name='edible'
                onChange={() => setFilters({ ...filters, edible: 1 })} />
              <label>✅ True</label>
              <input
                type="radio"
                name='edible'
                onChange={() => setFilters({ ...filters, edible: 0 })} />
              <label>❌ False</label>

              <input
                type="radio"
                name='edible'
                onChange={() => setFilters({ ...filters, edible: "" })}
              />
              <label>🔄 Clear</label>
            </div>

            <div>
              <h3>Indoor: </h3>
              <input
                type="radio"
                name='indoor'
                onChange={() => setFilters({ ...filters, indoor: 1 })} />
              <label>✅ True</label>
              <input
                type="radio"
                name='indoor'
                onChange={() => setFilters({ ...filters, indoor: 0 })} />
              <label>❌ False</label>

              <input
                type="radio"
                name='indoor'
                onChange={() => setFilters({ ...filters, indoor: "" })}
              />
              <label>🔄 Clear</label>
            </div>

            <div>
              <h3>Poisonous: </h3>
              <input
                type="radio"
                name='poisonous'
                onChange={() => setFilters({ ...filters, poisonous: 1 })} />
              <label>✅ True</label>
              <input
                type="radio"
                name='poisonous'
                onChange={() => setFilters({ ...filters, poisonous: 0 })} />
              <label>❌ False</label>

              <input
                type="radio"
                name='poisonous'
                onChange={() => setFilters({ ...filters, poisonous: "" })}
              />
              <label>🔄 Clear</label>
            </div>




            <div className='order'>
              <h3>Order:</h3>

              <input
                type="radio"
                name="order"
                onChange={() => setFilters({ ...filters, order: "asc" })}
              />
              <label>🔼 A-Z</label>

              <input
                type="radio"
                name="order"
                onChange={() => setFilters({ ...filters, order: "desc" })}
              />
              <label>🔽 Z-A</label>

              <input
                type="radio"
                name='order'
                onChange={() => setFilters({ ...filters, order: "" })}
              />
              <label>🔄 Clear</label>
            </div>

            <div className='box'>
              <h3>Cycle: </h3>
              <select onChange={(e) => setFilters({ ...filters, cycle: e.target.value })}>
                <option value="">any cycle</option>
                <option value="perennial">perennial</option>
                <option value="annual">annual</option>
                <option value="biennial">biennial</option>
                <option value="biannual">biannual</option>
              </select>
            </div>

            <div className='box'>
              <h3>Sun-Light: </h3>
              <select onChange={(e) => setFilters({ ...filters, sunlight: e.target.value })}>
                <option value="">any sun-light</option>
                <option value="full_shade">full_shade</option>
                <option value="part_shade">part_shade</option>
                <option value="sun-part_shade">sun-part_shade</option>
                <option value="full_sun">full_sun</option>
              </select>
            </div>
            <div>
              <h3>Watering</h3>
            <select onChange={(e)=> setFilters({...filters, watering: e.target.value})}>
              <option value="">any watering</option>
              <option value="frequent">frequent</option>
              <option value="average">average</option>
              <option value="minimum">minimum</option>
              <option value="none">none</option>
            </select>
            </div>

            <div>
              <h3>Hardiness zones</h3>
             <select onChange={(e) => setFilters({...filters, hardiness: e.target.value})}>
              <option value="null">all zones</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
             </select>
            </div>

            <button onClick={() => {setShowFilters(false)
              setFilters({...filters})
            }}>❌</button>
          </div>
        </div>

      )}
      {
        !showFilters && (
          <div className='search-box'>
            <input className="search-input" value={filters.q} placeholder="Type to Search..." onChange={(e) => setFilters({ ...filters, q: e.target.value })} />
            <button className='btn-search'
              onClick={async () => {
                setStatus(true)
                const qData = await getUrl(`https://perenual.com/api/species-list?key=sk-6EfF6799f856c8caf8424&q=${filters.q}`)
                console.log(qData)
                setPlants(qData.data)
                if (filters.q !== "" && plants.length < 1 && status) {
                  setStatus(false);
                  alert(filters.q + " is undefine")
                }
              }}>🔍</button>

          </div>
        )
      }


      <div>

        {!showFilters && (
          <button className='filters-button' onClick={() => setShowFilters(true)}>
            Filters
            {filterSelect() > 0 && (
              <span className='filters-badge'>{filterSelect()}</span>
            )}
          </button>
        )}

        <button className="get"
          onClick={async () => {
            setStatus(true)
            const plantsData = await getUrl(finalURL);
            setPlants(plantsData.data)
          }
          }>Get All Plants</button>
      </div>
      {
        status && plants.length === 0 ? <p>Loading...</p> : <></>
      }


      <PlantList plants={plants} />
      <div className='box-dir' style={{ display: plants.length ? "block" : "none" }}>
        <div className='dir'>
          <button disabled={filters.page <= 1} onClick={async () => {
            setPlants([])
            setFilters({ ...filters, page: filters.page - 1 })
            const prevPage = await getUrl(finalURL)
            setPlants(prevPage.data)
          }}> &larr; </button>

          <div className='num'>{filters.page}</div>

          <button disabled={filters.page >= plants.length} onClick={async () => {
            setPlants([])
            setFilters({ ...filters, page: filters.page + 1 })
            const nextPage = await getUrl(finalURL)
            setPlants(nextPage.data);
          }}> &rarr; </button>
        </div>

      </div>

    </section>
  )
}

export default PlantData
