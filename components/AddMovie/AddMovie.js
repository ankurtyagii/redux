import { useState } from 'react';

import { connect } from 'react-redux';
import { addMovie } from "../../redux/actions";

const AddMovie = (props) => {
    const { addMovie } = props;
    const [movie, setMovie] = useState({name: '', genre: ''});

    return (
        <>
            <div className="block">
                <p className="text-3xl text-center font-extrabold">Movie name</p>
                <input 
                    type="text"
                    className="focus:ring-blue-500 border-8 focus:border-blue-500 block w-60 p-5 lg:text-lg border-gray-300 rounded-md"
                    onChange={e => setMovie({...movie, name: e.target.value})}
                    value={movie.name}
                    placeholder="movie name"
                    />
            </div>
            <div>
                <p>Movie Genre</p>
                <input 
                    type="text"
                    className="focus:ring-blue-500 border-8 focus:border-blue-500 block w-60 p-5 lg:text-lg border-gray-300 rounded-md"
                    onChange={e => setMovie({...movie, genre: e.target.value})}
                    value={movie.genre}
                    placeholder="movie name"
                    />
                </div>
           
                <button className="border-8"
                    onClick={() => addMovie(movie)}>
                    Add Movie
                </button>
            </>
    )
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    { addMovie }
)(AddMovie)