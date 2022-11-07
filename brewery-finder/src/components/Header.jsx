

import Nav from './Nav'
import Search from './Search'

export default function Header (props) {

    return (
        <div className='header'>
            <h2>Local Brewery Finder</h2>
            <Nav />
            <Search location={props.location} 
                    setLocation={props.setLocation}
                    locationHeader={props.locationHeader} 
                    setLocationHeader={props.setLocationHeader}
                    breweries={props.breweries}
                    setBreweries={props.setBreweries}/>
        </div>
    )
}