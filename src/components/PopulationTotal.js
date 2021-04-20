import React from 'react';

const PopulationTotal = ({countries}) => {

    const totalPopulation = function(){
        return countries.reduce((accum, curr) => {
            return accum + curr.population
        }, 0)
    }

    return(
        <p>Total Population: {totalPopulation()}</p>
    )
}

export default PopulationTotal;
