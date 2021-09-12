import MovieListByGenre from '../MovieList/MovieListByGenre';
import cssConfig from '../../utils/cssConfig';

const GenreHeader = (props) => {
    return (
        <table className={cssConfig.genre_page_table}>
            <thead>
            <tr key="genre-page" class={cssConfig.genre_page_heading}>
                <th className={cssConfig.movie_row_heading}>Name</th>
                <th className={cssConfig.movie_row_heading}>Genre</th>
            </tr>
            </thead>
            <tbody>
            {props.movies.map(item => {
                return <MovieListByGenre movie={item}/>
            })}
            </tbody>
    </table>
    )
}

export default GenreHeader;