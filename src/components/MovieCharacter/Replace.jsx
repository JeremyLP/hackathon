import React from 'react';

function Replace({movie}){   
let str=movie ;
let result=str.replace("_", " ");
return(
    result
)
}
export default Replace;