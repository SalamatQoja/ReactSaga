import { call, put, takeEvery} from "redux-saga/effects";
import { NameListActionTypes, type NameList } from "./types";
import { fetchRecipeFailure, fetchRecipeSuccess } from "./Action";


export function fetchRecipeApi(): Promise<NameList[]> {
    return fetch('https://684a5d30165d05c5d35872a4.mockapi.io/userJobList')
    .then(res => {
        if(!res.ok) {
            throw new Error (`Oshibka API: ${res.status}`);
        }
        return res.json();
    })
}

function* fetchRecipeSaga() : Generator<any, void> {
    try{
        const data: NameList[] = yield call(fetchRecipeApi)
        yield put(fetchRecipeSuccess(data))
    } catch (e:any) {
        yield put(fetchRecipeFailure(e.message))
    }
}

export function* recipesWatcherSaga() {
    yield takeEvery(NameListActionTypes.FETCH_RECIPE_REQUEST, fetchRecipeSaga)
}