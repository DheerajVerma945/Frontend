import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Movie from './Movie';

function Moviepage() {
    const movieData = useLoaderData();
    console.log(movieData);
    if (!movieData) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <ul>
                {<li key={movieData.imdbID}>
                    <Movie currMovie={movieData} />
                </li>}
            </ul>
        </div>
    )
}

export default Moviepage
