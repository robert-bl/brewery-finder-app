import { useNavigate } from 'react-router-dom';

import { BREWERYDB_BASE_URL } from '../globals'


export default function BreweryList (props) {

  let navigate = useNavigate()

  const getBreweryDetails = (brew) => {
    navigate(`${brew.id}`)
  }

  
  return (
  (!props.breweries) ?
      <h2>Error</h2>
      :
      <div>
          {props.breweries.map((brew) => (
              <div key={brew.id} onClick={() => getBreweryDetails(brew)}>
                  <h3>{brew.name}</h3>
              </div>
          ))}
      </div>
  )
}