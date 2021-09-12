import AddMovie from "../AddMovie";
import MovieFilter from "./MovieFilter"
import cssConfig from '../../utils/cssConfig';

const MovieFilters = props => {
    const resetButtonsAndList = () => {
        props.resetFilter()
    }
    return (
        <div className="flex">

            <div className={cssConfig.movie_filters}>
                <MovieFilter type={'Comedy'} filterMovie={props.filterMovie} checkedStatus={props.comedyFilter} />
                <MovieFilter type={'Horror'} filterMovie={props.filterMovie} checkedStatus={props.horrorFilter} />
                <MovieFilter type={'Romance'} filterMovie={props.filterMovie} checkedStatus={props.romanceFilter} />             
            </div>

            <input className={cssConfig.movie_input}
                onChange={(e) => props.searchMovies(e.target.value)}
                type="text"
                placeholder="Search..."
                />
            <button 
                className={cssConfig.movie_filter_button}
                onClick={() => {resetButtonsAndList()}}
                >Reset
            </button>
            <AddMovie />
        </div>
    )
}

export default MovieFilters;
