import { connect } from 'react-redux';
import { filterWithGenre } from '../redux/actions';

import MovieListByGenre from '../components/MovieListByGenre';
import { useEffect } from 'react';

const Genre = props => {
    const { movies, filterWithGenre, movieGenre } = props;

    useEffect(() => {
        filterWithGenre(movieGenre)
    }, [])

    return (
        <div className="table w-full bg-rose-300 bg-stripes bg-stripes-black rounded-md overflow">
            <div className="table-row-group">
            <div className="table-row">
                <div className="table-cell border-4">Name</div>
                <div className="table-cell border-4">Genre</div>
            </div>
            {movies ? movies.map(item => {
                return <MovieListByGenre movie={item}/>
                
        }) : 'N/A'}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { movies: state.movie.filteredMovies }
}
const mapDispatchToProps = {
    filterWithGenre
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre);