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

  return (
    <div className="App">
      <Header location={location} setLocation={setLocation}
              breweries={breweries} setBreweries={setBreweries}/>
      <Main breweries={breweries}/>
      <Footer />
    </div>
  );
}

export default App;
