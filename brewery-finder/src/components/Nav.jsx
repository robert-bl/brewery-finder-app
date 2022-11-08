import { Link } from 'react-router-dom'

import Home from './Home'


export default function Nav () {

    return (
        <div>
            <div className="nav-links">
                <Link to='/' className='link'>Home</Link>
                <Link to='/breweries' className='link'>Brewery List</Link>
            </div>
        </div>
    )
}