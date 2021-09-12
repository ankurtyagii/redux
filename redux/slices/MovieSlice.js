import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    movies: [],
    filteredMovies: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovie(state, action) {
            const newMovie = {
                id: new Date().getUTCMilliseconds(),
                name: action.payload.name,
                genre: action.payload.genre,
                watch: false
            }
            state.movies = [...state.movies, newMovie]
        },
        deleteMovie(state,action) {
            state.movies = [...state.movies.filter(x => x.id !== action.payload)]
        },
        filterMovie(state, action) {
            const genre = action?.payload?.toLowerCase();
            state.filteredMovies = [...state.movies.filter(x => x.genre.includes(genre))]
        },
        getMovie(state) {
            state.movies = [...state.movies]
        },
        searchMovie(state, action) {
            state.filteredMovies = [...state.movies.filter(x => x.name.includes(action.payload))]
        },
        watchMovie(state, action) {
            state.movies.map(x => {
                if(x.id === action.payload) x.watch = !x.watch
                return x
            })
        },
    }
})

export const { addMovie, deleteMovie, filterMovie, getMovie, searchMovie, watchMovie } = movieSlice.actions;

export default movieSlice.reducer