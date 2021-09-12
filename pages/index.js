import { Provider } from 'react-redux'
import store from '../redux/store'

import Links from '../components/Links';
import Movies from '../components/MovieList/Movies';

const Movie = () => {
  return (
    <Provider store={store}>
      <Links />
      <Movies />
    </Provider>
  )
}

export default Movie;
