import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'

import rootReducer from "./reducers/index";
// import saga from './sagas'

// const sagaMiddleware = createSagaMiddleware()

// const store = createStore(
//     rootReducer,
//     applyMiddleware(sagaMiddleware)
// )
  
// sagaMiddleware.run(saga)

// export default store;
export default createStore(rootReducer);