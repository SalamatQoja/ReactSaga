// import { applyMiddleware, combineReducers, createStore } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import { countriesReducer } from '../countries/Reducer'
// import { rootSaga } from './rootSaga'

// const sagaMiddleware = createSagaMiddleware()

// const rootReducer = combineReducers({
//     countries: countriesReducer,
// })

// export type AppState = ReturnType<typeof rootReducer>

// export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// sagaMiddleware.run(rootSaga)
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {  countriesReducer } from '../countries/Reducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type AppState = ReturnType<typeof store.getState>

export { configureStore };
