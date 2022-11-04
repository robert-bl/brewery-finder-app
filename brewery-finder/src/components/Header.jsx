

import Nav from './Nav'
import Search from './Search'

export default function Header (props) {

    return (
        <div>
            <h2>Header</h2>
            <Nav />
            <Search location={props.location} setLocation={props.setLocation}
            breweries={props.breweries} setBreweries={props.setBreweries}/>
        </div>
    )
}