import { useState, useEffect } from "react"
import { STATES_LIST } from "../globals"


export default function Search (props) {


    const handleChange = (event) => {
        props.setLocation({...props.location, [event.target.id]: event.target.value})
        console.log(props.location)
    }
    const handleSubmit = (event) => {}



    return (
        <div className="search">
            <form>
                
                
                <input type="text" id="city" placeholder="city" onChange={handleChange} value={props.location.city}/>
                
                
                
                <select id='state' onChange={handleChange}>
                    {STATES_LIST.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                <button tyle='submit'>Find Breweries</button>
            </form>
        </div>
    )
}