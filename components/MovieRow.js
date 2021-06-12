import { Button, Checkbox } from 'antd';
const MovieRow = (props) => {
    const { movie } = props;
    return (
        <>
        <Checkbox
            onClick={() => {props.checkAsWatched(movie?.id)}}
            ></Checkbox>
        <li key={new Date().valueOf()}>
            {movie?.name}, {movie?.genre}
        </li>
        <Button 
            type="primary"
            onClick={() => {props.removeMovie(movie?.id)}}
            > Delete
        </Button>
        </>
    )
}
export default MovieRow;