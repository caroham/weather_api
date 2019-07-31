import React from 'react';
import './App.css';
import WeatherSearch from './components/WeatherSearch/WeatherSearch.js';

const axios = require('axios');

function App() {
  return (
    <div className="App">
      <WeatherSearch />
    </div>
  );
}

export default App;
