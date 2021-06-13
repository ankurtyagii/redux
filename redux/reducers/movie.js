import { ADD_MOVIE, GET_MOVIES, DELETE_MOVIE, WATCH_MOVIE, FILTER_MOVIE, SEARCH_MOVIE } from "../actionTypes";

const initialState = {
    movies: [],
    filteredMovies: []
}

function movie(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIE:
            const newMovie = {
                id: new Date().getUTCMilliseconds(),
                name: action.payload.movie.name,
                genre: action.payload.movie.genre,
                watch: false
            };
            const updatedState = {
                ...state,
                movies: [...state.movies, newMovie],
                filteredMovies: [...state.movies, newMovie]
            }
            return updatedState

        case GET_MOVIES:
            return {
                movies: [...state.movies],
                filteredMovies: [...state.movies]
            } || [];

        case DELETE_MOVIE:
            return {
                movies: [...state.movies.filter(x => x.id !== action.payload)]
            }

        case WATCH_MOVIE:
            return {
                movies: [...state.movies.map(x => {
                        if(x.id === action.payload) x.watch = !x.watch
                        return x
                    })]
            }
        case FILTER_MOVIE:
            
            return {
                movies: [...state.movies],
                filteredMovies: [...state.movies.filter(x => x.genre.includes(action.payload))]
            }
        case SEARCH_MOVIE:
            
            return {
                movies: [...state.movies],
                filteredMovies: [...state.movies.filter(x => x.name.includes(action.payload))]
            }
        default:
            return state
    }
}

export default movie;