import { useDispatch, useSelector } from 'react-redux';

import { filterMovie } from '../../redux/slices/MovieSlice';
import GenreHeader from './GenreHeader';
import { useEffect } from 'react';

const MovieByGenre = props => {
    const { movieGenre } = props;
    const filteredMovies = useSelector(state => state.movie.filteredMovies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(filterMovie(movieGenre))
    }, [])

    return <GenreHeader movies={filteredMovies} />
}

export default MovieByGenre