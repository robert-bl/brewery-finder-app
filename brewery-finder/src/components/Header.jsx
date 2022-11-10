

import Nav from './Nav'
import Search from './Search'

export default function Header (props) {

    return (
        <div className='header'>
            <div className="title-nav">
            <div>
                <h1 className='header-title'>B(HERE)</h1>
                <p className='header-text'>Find craft breweries near you.</p>
            </div>
            <Nav />
            </div>
            <Search location={props.location} 
                    setLocation={props.setLocation}
                    locationHeader={props.locationHeader} 
                    setLocationHeader={props.setLocationHeader}
                    breweries={props.breweries}
                    setBreweries={props.setBreweries}/>
        </div>
    )
}