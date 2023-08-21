
import {useState} from 'react';

import './App.css';
import TripList from './components/TripList';
import React from 'react';

function App() {
    const [showTrips, setShowTrips] = useState(true);

  return (
      <div className="App">
          <button onClick={ ()=> setShowTrips(!showTrips) }>Toggle data</button>
          {showTrips && <TripList />}

    </div>
  );
}

export default App;
