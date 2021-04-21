import React from 'react';
import FavouritesItem from './FavouritesItem';

const FavouritesList = ({favourites}) => {

    // For each favourite in favourites, return favourite and index, and render FavouritesItem for each one
    // This is then stored in our favouriteItems variable
    const favouriteItems = favourites.map((favourite, index) => {
        return (
            <FavouritesItem favourite={favourite} key={index} />
        )
    });

    return(
        <div>
            <h3>Favourite Countries:</h3>
            <ul>
                {favouriteItems}
            </ul>
        </div>
    )
}

export default FavouritesList;