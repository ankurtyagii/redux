import MovieRow from './MovieRow';
import cssConfig from '../../utils/cssConfig';

const MovieListHeader = (props) => {
    const { movies } = props;
    return (
        <div className={cssConfig.movie_list_table}>
            <table className="table-auto border border-2 h-10">
                <thead>
                    <tr key="0">
                        <th className={cssConfig.movie_row_action}>Watched</th>
                        <th className={cssConfig.movie_row_heading}>Name</th>
                        <th className={cssConfig.movie_row_heading}>Genre</th>
                        <th className={cssConfig.movie_row_action}>Delete</th>
                    </tr>
                </thead>
                {movies.length ? movies
                                    .slice()
                                    .sort(function(a,b){return a.watch-b.watch})
                                    .map(item => {
                                            return <>
                                                <tbody>
                                                    <MovieRow
                                                    movie={item}
                                                    removeMovie={props.removeMovie} 
                                                    checkAsWatched={props.checkAsWatched}
                                                    />
                                                </tbody>
                                            </>
                                    }) : ''}
            </table>
        </div>
    )
}

export default MovieListHeader;