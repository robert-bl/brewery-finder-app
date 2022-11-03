import { Route, Routes } from "react-router-dom"

import Home from './Home'
import BreweryList from './BreweryList'


export default function Main () {

    return (
        <div>
            <h2>Main</h2>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/brewery-list' element={<BreweryList />} />
            </Routes>

        </div>

    )
}