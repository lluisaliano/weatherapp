import './Header.css'
import {useEffect, useRef, useState} from "react";

function Header({ setLocation, setIsLoading }) {

    const [inputLocation, setInputLocation] = useState('');
    const [debounce, setDebounce] = useState(null);
    const debounceTimeout = useRef(null);

    const geoLocationAPI = import.meta.env.VITE_GEO_LOCATION_API;

    const handleLocationInput = (event) => {
        setInputLocation(event.target.value);

        // Reset Counter on every user input
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        // Then we set it up again (1s)
        debounceTimeout.current = setTimeout(() => {
            setDebounce(event.target.value); // If counter finishes, we update the value on debounce state
        }, 1000)
    }

    // If debounce state changes, then we call the API with parameters
    useEffect(() => {
        if (!inputLocation) return
        let location = {
            LAT: 0,
            LON: 0,
        }

        fetch(`https://geocode.maps.co/search?q=${debounce}&api_key=${geoLocationAPI}`)
            .then(res => res.json())
            .then(res => {
                location.LAT = res[0].lat;
                location.LON = res[0].lon;
                setLocation(location);
            })
    }, [debounce]);

    return (
        <>
            <header>
                <span className='title'>
                    <h2>LLUIS WEATHER</h2>
                </span>

                <span className='finder'>
                    <label htmlFor="location">Location: </label>
                    <input id='location' onChange={handleLocationInput} value={inputLocation} type="text"/>
                </span>
            </header>
        </>
    )
}

export default Header;