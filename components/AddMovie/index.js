import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, Modal } from 'antd';

import { addMovie } from '../../redux/slices/MovieSlice';
import MovieInput from './MovieInput';
import GenreTags from './GenreTags';
import cssConfig from '../../utils/cssConfig';
import { validateTag } from '../../utils/validate';

const AddMovie = () => {
    const dispatch = useDispatch()
    const [movie, setMovie] = useState({name: '', genre: ''});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tags, setTags] = useState([])

    const showModal = () => {
        setTags([])
        setMovie({name: '', genre: []})
        setIsModalVisible(true);
    }
    const handleCancel = () => setIsModalVisible(false);

    const handleOk = () => {
        if(movie.name.trim() && tags.length) {
            setTimeout(() => {
                dispatch(addMovie(movie))
            }, 3000)
            setIsModalVisible(false);
        } else {
            setMovie({name: '', genre: []})
        }
    };

    const saveTags = event => {
        if (validateTag(event, tags)) {
            setTags([...tags, event.target.value.toLowerCase()]);
            setMovie({...movie, 'genre': [...tags, event.target.value]})
            event.target.value = "";
        }
    };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
    return (
        <>
            <Button 
                type="primary" 
                onClick={showModal} 
                className={cssConfig.add_movie_button}>
                Add Movie
            </Button>
            <Modal 
                title="Add Movie" 
                visible={isModalVisible} 
                onOk={handleOk} 
                width={400}
                onCancel={handleCancel}>
                <MovieInput 
                    movie={movie}
                    placeholder={'Enter movie name'}
                    setMovie={setMovie}
                    type={'name'}
                    value={movie.name}
                />
                <GenreTags 
                    tags={tags}
                    removeTags={removeTags}
                    />
                <input 
                    type="text"
                    className={cssConfig.movie_input}
                    onKeyUp={(e) => saveTags(e)}
                    placeholder="Add Genre"
                />
            </Modal>
            </>
    )
}

export default AddMovie