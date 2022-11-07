import './App.css';

import { useState } from 'react'


import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const initialLocation = {
    city: '',
    state: ''
  }
  const [breweries, setBreweries] = useState([])
  const [location, setLocation] = useState(initialLocation)
  const [locationHeader, setLocationHeader] = useState('')

  return (
    <div className="App">
      <Header location={location} setLocation={setLocation}
              locationHeader={location} setLocationHeader={setLocationHeader}
              breweries={breweries} setBreweries={setBreweries}/>
      <div className='main-content'>
        <Main location={location} locationHeader={locationHeader} breweries={breweries}/>
        <div className='push'></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
