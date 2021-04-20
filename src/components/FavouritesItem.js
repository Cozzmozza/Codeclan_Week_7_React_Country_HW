import React from 'react';

const FavouritesItem = ({favourite}) => {

    return(
        <li><button>{favourite.name}</button></li>
    )

}

export default FavouritesItem;