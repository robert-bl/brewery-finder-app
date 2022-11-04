import './App.css';

import { useState, useEffect } from 'react'


import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {

  const initialLocation = {
    city: 'raleigh',
    state: ''
  }

  const [location, setLocation] = useState(initialLocation)

  return (
    <div className="App">
      <Header location={location} setLocation={setLocation}/>
      <Main location={location}/>
      <Footer />
    </div>
  );
}

export default App;
