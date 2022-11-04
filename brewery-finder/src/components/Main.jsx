import { Route, Routes } from "react-router-dom"

import Home from './Home'
import BreweryList from './BreweryList'
import BreweryDetail from './BreweryDetail'


export default function Main (props) {


    return (
        <div>
            <h2>Main</h2>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/breweries' element={<BreweryList breweries={props.breweries}/>} />
                <Route path='/breweries/:id' element={<BreweryDetail breweries={props.breweries} />} />
            </Routes>

        </div>

    )
}