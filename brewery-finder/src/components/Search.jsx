import { useState, useEffect } from "react"
import { STATES_LIST } from "../globals"
import axios from 'axios';
import { BREWERYDB_BASE_URL } from '../globals'

export default function Search (props) {


    const handleChange = (event) => {
        props.setLocation({...props.location, [event.target.id]: event.target.value})
        // console.log(props.location)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(props.location)
        const city = props.location.city
        const state = props.location.state
        const getData = async () => {
        const response = await axios.get(`${BREWERYDB_BASE_URL}by_state=${state}&by_city=${city}&per_page=50`)
        props.setBreweries(response.data)
        // console.log(props.breweries)
        }        
        getData()

    }





    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                
                
                <input type="text" id="city" placeholder="city" onChange={handleChange} value={props.location.city}/>
                
                
                
                <select id='state' onChange={handleChange}>
                        <option> - </option>
                    {STATES_LIST.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                <button type='submit'>Find Breweries</button>
            </form>
        </div>
    )
}