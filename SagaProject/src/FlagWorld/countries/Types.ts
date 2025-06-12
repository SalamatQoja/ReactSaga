// export interface Country {
//     name: { common: string }
//     capital: string[];
//     flags: { svg: string, png: string }
//     population: number;
//     languages: { [key: string]: string }
//     currencies: {
//         [code: string]: {
//             name: string;
//             symbol: string;
//         }
//     }
//     borders?: string[];
//     region: string[];
//     subregion: string;
//     cca3: string;
// }

// export interface CountriesState {
//     countries: Country[];
//     loading: boolean;
//     error: string | null;
// }

// export const CountriesActionTypes =  {
//     FETCH_COUNTRIES_REQUEST: "FETCH_COUNTRIES_REQUEST",
//     FETCH_COUNTRIES_SUCCESS: "FETCH_COUNTRIES_SUCCESS",
//     FETCH_COUNTRIES_FAILURE: "FETCH_COUNTRIES_FAILURE",
// } as const ;


// export type CountriesActionTypes =
//     typeof CountriesActionTypes[keyof typeof CountriesActionTypes]

// interface FetchCountriesRequestAction {
//     type: typeof CountriesActionTypes.FETCH_COUNTRIES_REQUEST
// }

// interface FetchCountriesSuccestAction {
//     type: typeof CountriesActionTypes.FETCH_COUNTRIES_SUCCESS
//     payload: Country[]
// }

// interface FetchCountriesFailuretAction {
//     type: typeof CountriesActionTypes.FETCH_COUNTRIES_FAILURE
//     payload: string;
// }

// export type CountriesActions =
//     | FetchCountriesRequestAction
//     | FetchCountriesSuccestAction
//     | FetchCountriesFailuretAction

