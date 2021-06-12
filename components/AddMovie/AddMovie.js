import { useState } from 'react';
import { Form, Select, Input } from 'antd';

import { connect } from 'react-redux';
import { addMovie } from "../../redux/actions";
import styles from './AddMovie.module.css';

const AddMovie = (props) => {
    const { addMovie } = props;
    const [movie, setMovie] = useState({name: '', genre: ''});
    const [tag, setTag] = useState([]);

    function submitMovie() {
        const prevMovieState = {...movie, genre: tag.join(',')};
        addMovie(prevMovieState)
    }
    return (
        <Form className={styles.movieForm} >
            <Form.Item label="Movie Name">
                <Input
                    className={styles.button}
                    onChange={e => setMovie({...movie, name: e.target.value})}
                    value={movie.name}
                    />
            </Form.Item>
            <Form.Item label="Movie Genre">

              <Select className={styles.select}
                mode="tags"
                tokenSeparators={[',']}
                size="large"
                onChange={(val) => {
                    return setTag(val);
                }}
                >
                {tag.map((t) => {
                    return (
                        <Select.Option key={t} value={t}>
                        {t}
                    </Select.Option>
                    );
                })}
                </Select>
            </Form.Item>
            <Form.Item>
                <button
                    className={styles.button} 
                    onClick={submitMovie}>
                    Add Movie
                </button>
            </Form.Item>
        </Form>
    )
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    { addMovie }
)(AddMovie)