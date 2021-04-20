import React from 'react';

const CountrySelect = ({countries, onCountrySelected}) => {

    const handleChange = (event) => {
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }
    
    const countryOptions = countries.map((country, index) => {
        return(
            <option value={index}>{country.name}</option>
        )
    })

    return(
        <select defaultValue='' onChange={handleChange}>
            <option value=''>Choose a Country</option>
            {countryOptions}
        </select>
    )
}

export default CountrySelect;