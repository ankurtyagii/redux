import cssConfig from '../../utils/cssConfig';
import GenreTags from '../AddMovie/GenreTags';

const MovieRow = (props) => {
    const { movie } = props;
    return (
        <tr key={movie?.id}>
            <td className={cssConfig.movie_row}>
                <input
                    type="checkbox"
                    checked={movie?.watch}
                    onChange={() => {props?.checkAsWatched(movie?.id)}}
                />
            </td>
            <td className={cssConfig.movie_row}>{movie?.name}</td>
            <td className={cssConfig.movie_row}>{<GenreTags tags={movie?.genre} />}</td>
            <td className={cssConfig.movie_row}>
                <button
                    type="primary"
                    onClick={() => {props?.removeMovie(movie?.id)}}
                    >Delete
                </button>
            </td>
      </tr>
    )
}
export default MovieRow;
