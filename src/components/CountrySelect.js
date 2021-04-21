import React from 'react';

const CountrySelect = ({countries, onCountrySelected}) => {

    // When onChange has happened, and we call handleChange
    // Whatever the onChange happened on(the event, our countries.name in the select)
    // Our chosenCountry is the value of the event target, in our countries array
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
        // Select is our 'options list' effectively
        // Initial select value is blank, and when we select one, we call handleChange
        <select defaultValue='' onChange={handleChange}>
            <option value=''>Choose a Country</option>
            {countryOptions}
        </select>
    )
}

export default CountrySelect;