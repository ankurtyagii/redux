import { connect } from 'react-redux';

import MovieRow from './MovieRow';
import MovieFilters from './MovieFilters';
import { getMovies, deleteMovie, watchMovie, filterWithGenre, searchMovie } from '../redux/actions';

const Movies = props => {
    const { movies, getMovies, deleteMovie, watchMovie, filterWithGenre, searchMovie } = props;
    
    function removeMovie(id) {
        deleteMovie(id)
    }

    function checkAsWatched(id) {
        watchMovie(id)
    }
    
    function filterMovie(type) {
        filterWithGenre(type)
    }

    function resetFilter() {
        getMovies();
    }
    
    function searchMovies(name) {
        searchMovie(name);
    }
    
    return (
        <>
        <MovieFilters 
            filterMovie={filterMovie}
            resetFilter={resetFilter}
            searchMovies={searchMovies}
        />
        <div className="table w-full bg-rose-300 bg-stripes bg-stripes-black rounded-md overflow">
            <div className="table-row-group">
            <div className="table-row">
                <div className="table-cell border-4" >Watched</div>
                <div className="table-cell border-4">Name</div>
                <div className="table-cell border-4">Genre</div>
                <div className="table-cell border-4">Delete</div>
            </div>
            {movies ? movies.sort(function(a,b){return a.watch-b.watch}).map(item => {
                return <>
            
                        <MovieRow
                            movie={item}
                            removeMovie={removeMovie} 
                            checkAsWatched={checkAsWatched}
                            />
                </>
        }) : 'N/A'}
            </div>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return { movies: state.movie.filteredMovies };
}

const mapDispatchToProps = {
    getMovies,
    deleteMovie,
    watchMovie,
    filterWithGenre,
    searchMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);