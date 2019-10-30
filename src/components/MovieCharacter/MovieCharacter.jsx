import React from 'react';
import './Grid.css';
import './MovieCharacter.css';



function MovieCharacter({movietest}) {
    return (
        <div className="align-center">
            <div className="mob-0  "></div>

            <div className="mob-12 tab-12 dsk-6 align-center row">
                <img alt="Image" className="mob-12 tab-12 dsk-6 image-carrou" src={movietest.posterUrl}></img>
                <div className="mob-12 tab-12 dsk-6 align-center row section-txt">
                    <h2 alt="title" className="mob-12 tab-12 dsk-12 h2">Title: {movietest.title}</h2>
                    <h2 alt="date" className="mob-12 tab-12 dsk-12 h2">Year: {movietest.year}</h2>
                    <h2 alt="Country" className="mob-12 tab-12 dsk-12 h2">Country: {movietest.country}</h2>
                    <h2 alt="Director" className="mob-12 tab-12 dsk-12 h2">Director: {movietest.director}</h2>
                </div>
            </div>
            <div className="mob-0"></div>
        </div>
    );
}


export default MovieCharacter;