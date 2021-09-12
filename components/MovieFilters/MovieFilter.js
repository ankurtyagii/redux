
const MovieFilter = (props) => {
    const { type, checkedStatus } = props;
    return (
        <div className="ml-2 flex">
            <input 
                type="radio" 
                className="form-radio mt-1" 
                name="filter" 
                value={type}
                onChange={() => {props.filterMovie(type)}}
                checked={checkedStatus}
                />
            <span className="ml-2">{type}</span>
        </div>
    )
}
export default MovieFilter;