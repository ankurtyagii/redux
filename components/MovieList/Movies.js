import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spin } from 'antd';

import { deleteMovie, filterMovie, getMovie, searchMovie, watchMovie   } from '../../redux/slices/MovieSlice';
import MovieFilters from '../MovieFilters';
import MovieListHeader from './MovieListHeader';


const Movies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movie.movies)
    const filteredMovies = useSelector(state => state.movie.filteredMovies)
    const [filter, setFilter] = useState(false)
    const [horrorFilter, setHorrorFilter] = useState(null)
    const [romanceFilter, setRomanceFilter] = useState(null)
    const [comedyFilter, setComedyFilter] = useState(null)
    const [loading, setLoading] = useState(false);

    function removeMovie(id) {
        setTimeout(() => {
            dispatch(deleteMovie(id))
          }, 3000)
    }

    function checkAsWatched(id) {
        dispatch(watchMovie(id))
    }
    
    function filterMovieOnGenre(value) {
        setFilter(true)
        setLoading(true)
        setTimeout(() => {
            dispatch(filterMovie(value))
            setLoading(false)
          }, 3000)
    }

    function resetFilter() {
        setFilter(false)
        setHorrorFilter(false)
        setRomanceFilter(false)
        setComedyFilter(false)
        dispatch(getMovie())
        setLoading(false)
    }
    
    function searchMovies(name) {
        setFilter(true)
        setLoading(true)
        setTimeout(() => {
            dispatch(searchMovie(name))
            setLoading(false)
          }, 3000)
    }
    
    useEffect(() => {
        setFilter(false)
    }, [movies])
    
    return (
        <>
        <MovieFilters 
            filterMovie={filterMovieOnGenre}
            resetFilter={resetFilter}
            searchMovies={searchMovies}
            comedyFilter={comedyFilter}
            horrorFilter={horrorFilter}
            romanceFilter={romanceFilter}
        />
        {loading && <Spin className="relative m-20" />}
        {!loading && <MovieListHeader
            movies={filter ? filteredMovies : movies} 
            removeMovie={removeMovie} 
            checkAsWatched={checkAsWatched}
            />}
        </>
    )
}

export default Movies
