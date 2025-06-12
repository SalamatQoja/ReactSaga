import { all } from "redux-saga/effects";
import { countriesWatcherSaga } from '../countries/Sagas'

export function* rootSaga() {
  yield all([countriesWatcherSaga()])
}