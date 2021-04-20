import React, {useState, useEffect} from 'react';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect';
import PopulationTotal from '../components/PopulationTotal';
import FavouritesList from '../components/FavouritesList';

const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        getCountries();
      }, [])

    const getCountries = () => {
        (fetch('https://restcountries.eu/rest/v2/all'))
        .then(res => res.json())
        .then(countries => setCountries(countries));
    }

    const onCountrySelected = (country) => setSelectedCountry(country);

    const addFavourite = (newFavourite) => {
        // newFavourite.id = Date.now();
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