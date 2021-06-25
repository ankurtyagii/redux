import { ADD_MOVIE, GET_MOVIES, DELETE_MOVIE, WATCH_MOVIE, FILTER_MOVIE, SEARCH_MOVIE } from "../actionTypes";

const initialState = {
    movies: [],
    filteredMovies: []
}

function movie(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIE:
            if(!action.payload.movie.name?.length || 
                !action.payload.movie.name?.length) return {
                ...state,
                movies: [...state.movies],
                filteredMovies: [...state.movies]
            };
            const newMovie = {
                id: new Date().getUTCMilliseconds(),
                name: action.payload.movie.name,
                genre: action.payload.movie.genre.toLowerCase(),
                watch: false
            };
            const updatedState = {
                ...state,
                movies: [...state.movies, newMovie],
                filteredMovies: [...state.movies, newMovie]
            }
            return updatedState
        case WATCH_MOVIE:
            state.movies.map(x => {
                if(x.id === action.payload) x.watch = !x.watch
                return x
            })
        case GET_MOVIES:
            return {
                movies: [...state.movies],
                filteredMovies: [...state.movies]
            } || [];

        case DELETE_MOVIE:
            return {
                movies: [...state.movies.filter(x => x.id !== action.payload)],
                filteredMovies: [...state.movies.filter(x => x.id !== action.payload)]
            }
        case FILTER_MOVIE:
            const genre = action.payload.toLowerCase();
            return {
                movies: [...state.movies],
                filteredMovies: [...state.movies.filter(x => x.genre.includes(genre))]
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