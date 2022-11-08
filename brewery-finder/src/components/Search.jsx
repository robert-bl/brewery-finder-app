import { useState, useEffect } from "react"
import { STATES_LIST } from "../globals"
import axios from 'axios';
import { BREWERYDB_BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom";

export default function Search (props) {

    const navigate = useNavigate()

    const handleChange = (event) => {
        console.log(event.target.value)
        props.setLocation({...props.location, [event.target.id]: event.target.value})
        // console.log(props.location)
    }

    const handleLocationSubmit = (event) => {
        event.preventDefault()

        props.setBreweries(null)
        console.log(props.location)
        const city = props.location.city
        const state = props.location.state

        const getData = async () => {
        const responsePage1 = await axios.get(`${BREWERYDB_BASE_URL}by_state=${state}&by_city=${city}&page=1&per_page=50`)
        const responsePage2 = await axios.get(`${BREWERYDB_BASE_URL}by_state=${state}&by_city=${city}&page=2&per_page=50`)
        const response = [...responsePage1.data, ...responsePage2.data]
            console.log(response)
        props.setBreweries(response)
        props.setLocationHeader(`Breweries in ${props.location.city}, ${props.location.state}`)
        }

        getData()
        navigate(`/breweries`)

    }

    const handleDistanceSubmit = (event) => {
        event.preventDefault()

        const getData = async () => {
        
            props.setBreweries(null)
            let coord = {}
            navigator.geolocation.getCurrentPosition(async (pos) => {
                        coord = {
                            lat: pos.coords.latitude,
                            long: pos.coords.longitude
                        }
                        const distanceResponse = await axios.get(`${BREWERYDB_BASE_URL}by_dist=${coord.lat},${coord.long}&per_page=6`)
                        props.setBreweries(distanceResponse.data)
                })
            }
        getData()
        props.setLocationHeader(`Breweries Closest to Your Location`)
        navigate(`/breweries`)
    }





    return (
        <div className="search">
            <form onSubmit={handleLocationSubmit} className='location-form'>
                
                
                <input type="text" id="city" placeholder="city" onChange={handleChange} value={props.location.city}/>
                
                
                
                <select id='state' onChange={handleChange}>
                        <option> select state </option>
                    {STATES_LIST.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                <button type='submit'>Find Breweries</button>
            </form>
            <form onSubmit={handleDistanceSubmit} className="distance-form">
                <label>Find Breweries Near You</label>
                <button type='submit'>Find Closest Breweries</button>
            </form>
        </div>
    )
}