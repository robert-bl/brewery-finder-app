import { useEffect } from 'react';
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
      <div className='brewery-list'>
          <h2>{props.locationHeader}</h2>
          <div className="brewery-list-arr">
          {props.breweries.map((brew) => (
              <div className='brew-list-item' key={brew.id} onClick={() => getBreweryDetails(brew)}>
                  <h4 className='list-brewery-name'>{brew.name}</h4>
                  <p>{brew.brewery_type}</p>
              </div>
          ))}
          </div>
      </div>
  )
}