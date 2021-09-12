import cssConfig from '../../utils/cssConfig';

const MovieInput = (props) => {
    const { movie, placeholder, setMovie, type, value } = props;
    return (
        <input 
            type="text"
            className={cssConfig.movie_input}
            onChange={e => setMovie({...movie, [type]: e.target.value})}
            value={value}
            placeholder={placeholder}
        />
    )
}

export default MovieInput;