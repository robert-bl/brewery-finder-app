import { useEffect, useState } from 'react';
import axios from 'axios';

import { BREWERYDB_BASE_URL } from '../globals'


export default function BreweryList (props) {





  // useEffect(() => {
  // const getData = async () => {
  //   const response = await axios.get(`${BREWERYDB_BASE_URL}breweries?by_city=${props.location.city}&per_page=50`)
  //   console.log(response.data)
  //   setBreweries(response.data)
  //   }

  //   getData()

  // }, [])


  
  return (
  (!props.breweries) ?
      <h2>Error</h2>
      :
      <div>
          {props.breweries.map((brew) => (
              <div key={brew.id}>
                  <h3>{brew.name}</h3>
              </div>
          ))}
      </div>
  )
}