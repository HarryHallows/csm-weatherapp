import React, { useState } from 'react';
import './app.scss';


function App() 
{

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //returns a number between 0 - 6 (e.g monday --> sunday)
    let day = days[d.getDay()];

    //returns a number between 0 - 30 (e.g 1st --> 31st)
    let date = d.getDate();
    
    //returns a number between 0 - 11 (e.g January --> December)
    let month = months[d.getMonth()];

    //returns a number based on the current year (e.g 2021 )
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  
  window.addEventListener("load", () => {
    let currentLongitude;
    let currentLatitude;
    let apiKey = '9f97fc4feea97d1dc07ac9864c1e83af';
    let appID = '7dc79c65';
  
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(position => {
        currentLongitude = position.coords.longitude;
        currentLatitude = position.coords.latitude;
  
        const api = `https://api.weatherunlocked.com/api/current/${currentLatitude},${currentLongitude}?app_id=${appID}&app_key=${apiKey}/${dateBuilder(new Date())}`
        
      });
    
      //fetch()
      console.log(`Successfully accessed Long: ${currentLatitude} && Lat: ${currentLatitude}`);
    }
    else
    {
      console.log('Unsuccessfully retrieved access to the location of the operating machine.');
    }
  });
  
//#region legacy code

  /*const search = evt => {
    if (evt.key === "Enter")
    {
      fetch(`${api.base}weather?q=${query}&units=metric&APID=${api.key}`)
        .then(res => res.json())  
        .then(result => {
          setWeather(result);
          setQuery(''); 
          console.log(result);
        });
    }
  }*/
  
//#endregion

  return (
    <div className="app">


      {/*
      <main>
        <div className="search-box">
          <input 
          type="text" 
          className="search-bar"
          placeholder="Search Location..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          //onKeyPress={search}
          />
        </div>
      </main>
      */}


      <div className="FG-container">
        <div className="text-container">
          <div className="location-box">
            <div className="location"><h1>London, UK</h1></div>
            {/*gets the current date*/}
            <div className="date"><h2>{dateBuilder(new Date())}</h2></div>
          </div>   

          <div className="weather-box">
            <div className="temperature">15°c</div>
            <div className="weather-type">Cloudy</div>
          </div>
        </div>
        
          
        <img src="/assets/foreground/csm-foreground.svg" alt="central saint martins logo" />
      </div>

      <div className="BG-container">

        {
        // Day + Night containers && sunny/cloudy/rainy weather cycles
        }
      </div>
    </div>
  );
}

export default App;
