import { useState } from 'react';
import { Provider } from 'react-redux'
import { useRouter } from 'next/router';

import { Spin } from 'antd';

import MovieByGenre from '../components/MovieGenre/MovieByGenre';
import Links from '../components/Links';
import store from '../redux/store'

const Genre = () => {
    const { query } = useRouter()
    const [loading, setLoading] = useState(true);

    setTimeout( () => {
      setLoading(false)
  }, 3000);

    return (
      <Provider store={store}>
        <Links type="Home" />
        {loading && <Spin className="relative m-20" />}
        {!loading && <MovieByGenre
            movieGenre={query.genre}
            ></MovieByGenre>}
      </Provider>
    )
}

export default Genre;
