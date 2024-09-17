import './App.css'
import Header from "./UI/Header.jsx";
import Main from "./UI/Main.jsx";
import {useEffect, useState} from "react";
import organizeData from "./Utils/organizeData.js";

function App() {
    const [todayWeatherData, setTodayWeatherData] = useState(null);
    const [location, setLocation] = useState({});


    let apiKey = import.meta.env.VITE_WEATHER_API
    // When Location changes, a new api call should be made.
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.LAT}&lon=${location.LON}&appid=${apiKey}`

    useEffect(() => {
        if (!location.LAT) {
            let cachedData = localStorage.getItem('weather')
            if (cachedData) {setTodayWeatherData(JSON.parse(cachedData))}
            return;
        }

         fetch(apiURL).then(res => {
         if (res.ok) {
         return res.json()
         }
         throw new Error(`Error: ${res.statusText}`);
         }).then(data => {
            let organizedWeatherData = organizeData(data);
            setTodayWeatherData(organizedWeatherData)
            localStorage.setItem('weather', JSON.stringify(organizedWeatherData))
         }).catch(err => console.log(err));
    }, [location]); // If location changes, we will do a new call and update state.

    return (
    <>
        <Header setLocation={setLocation}/>
        <Main todayWeatherData={todayWeatherData}/>
    </>
  )
}

export default App
