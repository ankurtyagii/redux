import cssConfig from '../../utils/cssConfig';

const MovieListByGenre = (props) => {
    const { movie } = props;
    return (
         <tr key={movie?.id}>
            <td className={cssConfig.movie_row}>{movie?.name}</td>
            <td className={cssConfig.movie_row}>{movie?.genre}</td>
        </tr>
    )
}
export default MovieListByGenre;