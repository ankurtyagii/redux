import { Provider } from 'react-redux'

import AddMovie from '../components/AddMovie/AddMovie';
import Movies from '../components/Movies';
import store from '../redux/store'

const Movie = () => {

    return (
      <Provider store={store}>
        <AddMovie></AddMovie>
        <Movies></Movies>
      </Provider>
    )
}

export default Movie;