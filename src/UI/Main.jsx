import Today from "./Today.jsx";
import "./Main.css";

function Main({ todayWeatherData }) {

    return (
    <main>
        {todayWeatherData ? <Today todayWeather={todayWeatherData}/> : <p className='loadingParagraph'>Introduce Location First...</p>}
    </main>
    )
}

export default Main;