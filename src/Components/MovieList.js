import React from 'react'
import { MovieCard } from './MovieCard'


export const MovieList = ({ movieList,search }) => {
    return (
        <div>
            {movieList.filter((movie) => movie.title.toUpperCase().match(search.toUpperCase()))
                .map((movie) => { return <MovieCard movieCard={movie} key={movie.id} deleteCard /> })}
        </div>
    )
}
