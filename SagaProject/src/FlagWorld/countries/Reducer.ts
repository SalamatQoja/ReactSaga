import type { AnyAction } from 'redux';
import {
    type CountriesState,
    CountriesActionTypes,
} from '../countries/Types'

const initialState: CountriesState = {
    countries: [],
    loading: false,
    error: null,
}

export const countriesReducer = (
    state = initialState,
    action: AnyAction
): CountriesState => {
    switch (action.type) {
        case CountriesActionTypes.FETCH_COUNTRIES_REQUEST:
            return { ...state, loading: true, error: null }

        case CountriesActionTypes.FETCH_COUNTRIES_SUCCESS:
            return { ...state, loading: false, countries: action.payload }

        case CountriesActionTypes.FETCH_COUNTRIES_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
