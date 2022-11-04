import { useState, useEffect } from "react"
import { STATES_LIST } from "../globals"
import axios from 'axios';
import { BREWERYDB_BASE_URL } from '../globals'
import { useNavigate } from "react-router-dom";

export default function Search (props) {

    const navigate = useNavigate()

    const handleChange = (event) => {
        props.setLocation({...props.location, [event.target.id]: event.target.value})
        // console.log(props.location)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(props.location)
        const city = props.location.city
        const state = props.location.state

        const getData = async () => {
        const responsePage1 = await axios.get(`${BREWERYDB_BASE_URL}by_state=${state}&by_city=${city}&page=1&per_page=50`)
        const responsePage2 = await axios.get(`${BREWERYDB_BASE_URL}by_state=${state}&by_city=${city}&page=2&per_page=50`)

        console.log(responsePage1)
        console.log(responsePage2)
        const response = [...responsePage1.data, ...responsePage2.data]
            console.log(response)
        props.setBreweries(response)
        // console.log(props.breweries)
        }

        getData()
        navigate(`/breweries`)

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