import { configureStore } from '@reduxjs/toolkit';
import movieSlice from './slices/MovieSlice';

const store = configureStore({
    reducer: {
        movie: movieSlice
    }
})

export default store;