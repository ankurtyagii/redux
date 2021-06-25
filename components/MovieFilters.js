const MovieFilter = props => {
    const resetButtonsAndList = () => {
        props.resetFilter()
    }
    return (
        <>
        <div className="block">
            <span className="text-gray-700">Movie Filters</span>
            <div className="mt-2">
                <div>
                    <input 
                        type="radio" 
                        className="form-radio" 
                        name="filter" 
                        value="Horror"
                        onChange={() => {props.filterMovie('Horror')}}
                        
                        />
                    <span className="ml-2">Horror</span>
                </div>
                <div>
                    <input 
                        type="radio" 
                        className="form-radio" 
                        name="filter" 
                        value="Comedy"
                        onChange={() => {props.filterMovie('Comedy')}}
                        
                        />
                    <span className="ml-2">Comedy</span>
                </div>
                <div>
                        <input 
                            type="radio" 
                            className="form-radio" 
                            name="filter" 
                            value="Romance" 
                            onChange={() => {props.filterMovie('Romance')}}
                            
                        />
                        <span className="ml-2">Romance</span>
                </div>
            </div>
            </div>
        {/* <Radio.Group onChange={() => {props.filterMovie(value)}} value={value}>
            <Radio 
                value={'Horror'}
                >Horror</Radio>
            <Radio 
                value={'Romance'}
                >Romance</Radio>
            <Radio 
                value={'Comedy'}
                >Comedy</Radio>
        </Radio.Group> */}
        <input 
            onChange={(e) => props.searchMovies(e.target.value)}
            type="text"
            placeholder="Search..."
           />
        <button 
            className='px-5 py-3 border border-black text-white bg-indigo-600 hover:bg-indigo-700'
            onClick={() => {resetButtonsAndList()}}
            >Reset</button>
        </>
    )
}

export default MovieFilter;