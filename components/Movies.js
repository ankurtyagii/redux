import { connect } from 'react-redux';

import MovieRow from './MovieRow';
import { getMovies, deleteMovie, watchMovie } from '../redux/actions';

const Movies = props => {
    const { movies, deleteMovie, watchMovie } = props;
    
    function removeMovie(id) {
        console.log('id', id)
        deleteMovie(id)
    }

    function checkAsWatched(id) {
        console.log('id', id)
        watchMovie(id)
    }

    return movies ? movies.map(item => {
            return (
            <ul>
                <MovieRow 
                    movie={item}
                    removeMovie={removeMovie} 
                    checkAsWatched={checkAsWatched}
                />
            </ul>)
        }) : 'N/A'
}

const mapStateToProps = state => {
    return { movies: state.movie.movies };
}

const mapDispatchToProps = {
    getMovies,
    deleteMovie,
    watchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);