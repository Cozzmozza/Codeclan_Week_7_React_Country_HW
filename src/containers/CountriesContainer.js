import React, {useState, useEffect} from 'react';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect';
import PopulationTotal from '../components/PopulationTotal';
import FavouritesList from '../components/FavouritesList';

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favourites, setFavourites] = useState([]);


    //Calls getCountries when we start up. Without, we will have no countries!
    useEffect(() => {
        getCountries();
      }, [])


    // Fetch method for our API
    const getCountries = () => {
        // Grab the URL, returns the object as a pending Promise
        (fetch('https://restcountries.eu/rest/v2/all'))
        // Treat the promise like a returned object, and callback
        // Returns a Response object 
        .then(res => res.json())
        // Need to add another .then to say what to do with it
        .then(countries => setCountries(countries));
    }

    // When we select a country in our Select (options), set the selected country to it
    const onCountrySelected = (country) => setSelectedCountry(country);


    // When we click add favourite, run this
    const addFavourite = (newFavourite) => {
        const updatedFavourites = [...favourites, newFavourite];
        setFavourites(updatedFavourites)
    }

    return(
        <div>
            <PopulationTotal countries={countries}/>
            <CountrySelect countries={countries} onCountrySelected={onCountrySelected}/>
            {selectedCountry ? <CountryDetail selectedCountry={selectedCountry} addFavourite={addFavourite}/> : null}
            {favourites.length > 0 ? <FavouritesList favourites={favourites}/> : null}

        </div>
    )
}

export default CountriesContainer

// STILL TO DO:
    // Button functionality for favourites
    // Keys/indexes for errors
    // Disallow duplicates