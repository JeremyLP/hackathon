import React from 'react';

function Filter({movies, select}){

    let date = select;
    let result = movies.filter(movie => movie.year === date);

    return(
        console.log('filter 1',movies ,result)
    )
}

export default Filter;