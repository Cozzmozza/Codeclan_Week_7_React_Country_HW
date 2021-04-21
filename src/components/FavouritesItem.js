import React from 'react';

const FavouritesItem = ({favourite}) => {

    // Note, singular favourite
    // Returned in a button. This will eventually be a link to the selectedCountry
    return(
        <li><button>{favourite.name}</button></li>
    )

}

export default FavouritesItem;