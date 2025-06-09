import { all } from "redux-saga/effects";
import { recipesWatcherSaga } from "./Sagas";

export function* rootSaga() {
    yield all([recipesWatcherSaga()])
}