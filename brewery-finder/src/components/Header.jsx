

import Nav from './Nav'
import Search from './Search'

export default function Header (props) {

    return (
        <div className='header'>
            <div className="title-nav">
            <h2 className='header-title'>Local Brewery Finder</h2>
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