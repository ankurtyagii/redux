import { delay, takeEvery, put } from 'redux-saga/effects'
import { GET_MOVIES } from './actionTypes';

export function* fetchMovies(action) {
    yield delay(5000);
    yield put({ type: 'GET_MOVIES' })
}

function* rootSaga() {
    yield takeEvery(GET_MOVIES, fetchMovies)
}

export default rootSaga