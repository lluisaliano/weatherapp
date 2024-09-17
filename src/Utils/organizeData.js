export default function organizeData(data) {
    let transformTime = time => new Date(time * 1000).toLocaleString();
    let transformTemperature = temperature => temperature-273.15;

    console.log(data);

    return {
        location: data.name,
        main: data.weather[0].main,
        description: data.weather[0].description,
        temperature: transformTemperature(data.main.temp).toFixed(0),
        feelsLike: transformTemperature(data.main.feels_like),
        humidity: data.main.humidity,
        wind: {
            speed: data.wind.speed,
            deg: data.wind.deg,
        },
        sunTimes: {
            sunset: transformTime(data.sys.sunset),
            sunrise: transformTime(data.sys.sunrise)
        }
    };
}