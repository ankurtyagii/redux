import { Provider } from 'react-redux'

import AddMovie from '../components/AddMovie/AddMovie';
import Links from '../components/Links';
import Movies from '../components/Movies';
import store from '../redux/store'

const Movie = () => {

    return (
      <Provider store={store}>
        <Links></Links>
        <AddMovie></AddMovie>
        <Movies></Movies>
      </Provider>
    )
}

export default Movie;