import React from 'react';

function Filter({movies}, select){

    let date = select;
    let result = movies.year.filter(movies.year === date);

    return(
        result
    )
}

export default Filter;