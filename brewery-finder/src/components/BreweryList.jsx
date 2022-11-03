import { useEffect, useState } from 'react';
import axios from 'axios';

import { BREWERYDB_BASE_URL } from '../globals'


export default function BreweryList () {


    //create state for data
    const [breweries, setBreweries] = useState([])

  //call axios function

    useEffect(() => {
    const getData = async () => {
    const response = await axios.get(`${BREWERYDB_BASE_URL}breweries`)
    setBreweries(response.data)
    }

    getData()

    }, [])



  //set state of data


  //see data

    console.log(breweries)
  //make guard opperator
    
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