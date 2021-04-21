import React from 'react';

const CountryDetail = ({selectedCountry, addFavourite}) => {

    const handleClick = () => {
        addFavourite(selectedCountry)
        // Could check for duplicates here, if we throw favourites in
    }

    return(
        <>
           <h3>Name: {selectedCountry.name}</h3>
            <img src={selectedCountry.flag} alt='The countries flag'/>
           
            {/* Button to add country to our favourites list
            Using an onClick listner, calling handleclick() function.
            Wrapped within another function so it isn't called immediately */}
            <button onClick={() => handleClick()}>Add to favourites</button>
        </>
    )
}

export default CountryDetail;