import React from 'react';
import FavouritesItem from './FavouritesItem';

const FavouritesList = ({favourites}) => {

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