import React from 'react'
import './info.scss';

export default function Info() {

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
        //These are overridden by the local coords but these are the CSM coordinates
        let latitude = '51.53'; 
        let longitude = '-0.12';
    
        let apiKey = '9f97fc4feea97d1dc07ac9864c1e83af';
        let appID = '7dc79c65';
    
        let temperatureDescripton = document.querySelector('.temperature-description');
        let weatherType = document.querySelector('.weather-type');
    
        //Tries to get access to computer location
        if(navigator.geolocation)
        {
          //SETS THE LOCAL LOCATION TO THE COORDINATE VARIABLES
          navigator.geolocation.getCurrentPosition(position => {
            //Gets the direct local location of the coordinates
            longitude = position.coords.longitude; 
            latitude = position.coords.latitude;
      
            //const proxy = "https://cors-anywhere.herokuapp.com/"; //If CORS error was needed
            const api = `http://api.weatherunlocked.com/api/current/${latitude}, ${longitude}?app_id=${appID}&app_key=${apiKey}`;
            
            fetch(`${api}`)
              .then(response => {
                return response.json();
              })
              .then(data => {
                console.log(data);
                const {temp_c, wx_desc} = data;
                //Set DOM Elements from the API
                temperatureDescripton.textContent = temp_c;
                weatherType.textContent = wx_desc; 
              })
          });
        
        
          console.log(`Successfully accessed local location`);
        }
        else
        {
          //If the user decides not to accept local locations then use pre-set coordinates
          const api = `http://api.weatherunlocked.com/api/current/${latitude}, ${longitude}?app_id=${appID}&app_key=${apiKey}`;
        
          fetch(`${api}`)
            .then(response => {
              return response.json();
            })
            .then(data => {
              console.log(data);
              const {temp_c, wx_desc} = data;
              //Set DOM Elements from the API
              temperatureDescripton.textContent = temp_c;
              weatherType.textContent = wx_desc; 
            })
          console.log('Unsuccessfully retrieved access to the location of the operating machine.');
        }
      });

    return (
        <div className="info">


            <div className="text-container">
                <div className="location-box">
                    <div className="location"><h1 alt ="states city name">London, UK</h1></div>
                    {/*gets the current date*/}
                    <div className="date"><h2 alt="current date of today">{dateBuilder(new Date())}</h2></div>
                </div>   

                <div className="temperature-container">
                    <div className="temperature-description">--</div>
                    <div className="degree-sign">°c</div>
                </div>
                <div className="weather-type">--</div>
            </div>
           

            <div className="weather-box">

            </div>
        {
        // Day + Night containers && sunny/cloudy/rainy weather cycles
        }
        </div>
    )
}
