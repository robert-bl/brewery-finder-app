import { useEffect, useState } from 'react';
import axios from 'axios';

import { BREWERYDB_BASE_URL } from '../globals'


export default function BreweryList (props) {



  const [breweries, setBreweries] = useState([])


  useEffect(() => {
  const getData = async () => {
    const response = await axios.get(`${BREWERYDB_BASE_URL}breweries?by_city=${props.location.city}&per_page=50`)
    setBreweries(response.data)
    }

    getData()

  }, [])





  console.log(breweries)

  
  return (
  (!breweries) ?
      <h2>Error</h2>
      :
      <div>
          {breweries.map((brew) => (
              <div key={brew.id}>
                  <h3>{brew.name}</h3>
              </div>
          ))}
      </div>
  )
}