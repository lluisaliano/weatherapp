import TodayDescription from "./TodayDescription.jsx";
import imageURL from "../Utils/imageURL.js";
import "./Today.css"

function Today({ todayWeather }) {
    return (
    <div>
        <figure>
            <img className='weatherImage' src={imageURL(todayWeather.main, Date.now() > todayWeather.sunrise)} alt={todayWeather.description}/>
            <figcaption>
                <TodayDescription todayDescription={todayWeather}/>
            </figcaption>
        </figure>
        <div className={'location'}>
            {todayWeather.location}
        </div>
    </div>
    )
}

export default Today;