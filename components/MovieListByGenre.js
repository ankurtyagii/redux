const MovieListByGenre = (props) => {
    const { movie } = props;
    return (
         <div className="table-row" key={movie?.id}>
            <div className="table-cell border-4 text-black font-extrabold text-center bg-rose-500 px-6 py-4">{movie?.name}</div>
            <div className="table-cell border-4 text-black font-extrabold text-center bg-rose-500 px-6 py-4">{movie?.genre}</div>
        </div>
    )
}
export default MovieListByGenre;