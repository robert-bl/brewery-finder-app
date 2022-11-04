import { Link } from 'react-router-dom'

import Home from './Home'


export default function Nav () {

    return (
        <div>
            <h2>Nav</h2>
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/breweries'>Brewery List</Link>
            </div>
        </div>
    )
}