// import { call, put, takeEvery } from 'redux-saga/effects'
// import { fetchCountriesSuccess, fetchCountriesFailure, } from './Actions'
// import { CountriesActionTypes, type Country } from '../countries/Types'

// export function fetchCountriesApi(): Promise<Country[]> {
//     return fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,languages,currencies,borders,region,subregion,cca3')
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(`Ошибка API: ${res.status}`);
//             }
//             return res.json();
//         });
// }

// function* fetchCountriesSaga() {
//     try {
//         const data: Country[] = yield call(fetchCountriesApi)
//         yield put(fetchCountriesSuccess(data))
//     } catch (e: any) {
//         yield put(fetchCountriesFailure(e.message))
//     }
// }

// export function* countriesWatcherSaga() {
//     yield takeEvery(CountriesActionTypes.FETCH_COUNTRIES_REQUEST, fetchCountriesSaga)
// }


