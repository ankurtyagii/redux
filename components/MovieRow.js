const MovieRow = (props) => {
    const { movie } = props;
    return (
         <div className="table-row" key={movie?.id}>
            <div className="table-cell border-4 text-black font-extrabold text-center bg-rose-500 px-6 py-4">
                    <input 
                        type="checkbox" 
                        checked={movie?.watch}
                        onClick={() => {props?.checkAsWatched(movie?.id)}}
                         />
            </div>
            <div className="table-cell border-4 text-black font-extrabold text-center bg-rose-500 px-6 py-4">{movie?.name}</div>
            <div className="table-cell border-4 text-black font-extrabold text-center bg-rose-500 px-6 py-4">{movie?.genre}</div>
            <div className="table-cell border-4 text-black font-extrabold text-center bg-rose-500 px-6 py-4">
                <button 
                    type="primary"
                    onClick={() => {props?.removeMovie(movie?.id)}}
                    > Delete
                </button>
            </div>
        </div>
    )
}
export default MovieRow;