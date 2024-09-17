import cloudy from '../weatherImages/cloudy.svg';
import cloudynight from '../weatherImages/cloudynight.svg';
import night from '../weatherImages/night.svg';
import rainy from '../weatherImages/rainy.svg';
import rainynight from '../weatherImages/rainynight.svg';
import sunny from '../weatherImages/sunny.svg';
import thunder from '../weatherImages/thunder.svg';
import thundernight from '../weatherImages/thundernight.svg';

export default function imageURL(condition, isDay) {
    let image;
    switch(condition) {
        case 'Clouds':
            image = isDay ? cloudy : cloudynight;
            break;
        case 'Rain':
            image = isDay ? rainy : rainynight;
            break;
        case 'Thunderstorm':
            image = isDay ? thunder : thundernight;
            break;
        default: // Clear
            image = isDay ? sunny : night
            break;
    }
    return image;
}