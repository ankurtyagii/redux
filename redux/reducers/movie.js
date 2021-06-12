import { ADD_MOVIE, GET_MOVIES, DELETE_MOVIE, WATCH_MOVIE } from "../actionTypes";

const initialState = {
    movies: []
}

function movie(state = initialState, action) {
    console.log('action', action)
    console.log('state', state)
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
                movies: [...state.movies, newMovie]
            }
            return updatedState
        case GET_MOVIES:
            return action.payload  || [];
        case DELETE_MOVIE:
            return {
                movies: [...state.movies.filter(x => x.id !== action.payload)]
            }
        case WATCH_MOVIE:
            console.log(state.movies.map(x => {
                if(x.id === action.payload) x.watch = !x.watch
                return x
            }))
            // return {
            //     movies: [...state.movies.map(x => (x.id === action.payload) ? x.watch = !x.watch : x.watch)]
            // }
        default:
            return state
    }
}

export default movie;