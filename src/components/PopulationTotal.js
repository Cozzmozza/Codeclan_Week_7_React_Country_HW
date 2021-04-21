import React from 'react';

const PopulationTotal = ({countries}) => {

    // Function to calculate the total population from all our countries
    const totalPopulation = function(){
        // Template method array.reduce((accum, curr) => {return accum + curr.thing}), then return our reduce
        return countries.reduce((accum, curr) => {
            return accum + curr.population
        }, 0) // Initial value 0 is a must, else it will return a type of whatever the currentvalue is i.e. an object in this case
    }

    return(
        <p>Total Population: {totalPopulation()}</p>
    )
}

export default PopulationTotal;
