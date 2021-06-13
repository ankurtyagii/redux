import { ADD_MOVIE, GET_MOVIES, DELETE_MOVIE, WATCH_MOVIE, FILTER_MOVIE, SEARCH_MOVIE } from './actionTypes';

let nextMovieId = 0;

export const addMovie = movie => ({
    type: ADD_MOVIE,
    payload: {
        id: ++nextMovieId,
        movie
    }
})

export const getMovies = (movies) => ({
    type: GET_MOVIES,
    payload: movies
})

export const deleteMovie = (id) => ({
    type: DELETE_MOVIE,
    payload: id
})

export const watchMovie = (id) => ({
    type: WATCH_MOVIE,
    payload: id
})

export const filterWithGenre = (type) => ({
    type: FILTER_MOVIE,
    payload: type
})

export const searchMovie = (type) => ({
    type: SEARCH_MOVIE,
    payload: type
})
