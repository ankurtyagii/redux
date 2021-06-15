import { Provider } from 'react-redux'

import store from '../redux/store'
import Genre from '../components/Genre';
import { useRouter } from 'next/router';

const GenrePage = () => {
    const { query } = useRouter() 
    return (
      <Provider store={store}>
        <Genre
            movieGenre={query.genre}
            ></Genre>
      </Provider>
    )
}

export default GenrePage;