import { Route, Routes } from "react-router-dom"

import Home from './Home'
import BreweryList from './BreweryList'


export default function Main (props) {


    return (
        <div>
            <h2>Main</h2>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/brewery-list' element={<BreweryList location={props.location}/>} />
            </Routes>

        </div>

    )
}