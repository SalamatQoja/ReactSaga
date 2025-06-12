import {  type RecipeState, NameListActionTypes } from "./types";

const initialState: RecipeState = {
    recipe: [],
    loading: false,
    error: null,
}


export const recipeReducer = (
    state = initialState,
    action: any
): RecipeState => {
    switch (action.type) {
        case NameListActionTypes.FETCH_RECIPE_REQUEST:
            return { ...state, loading: true, error: null };

        case NameListActionTypes.FETCH_RECIPE_SUCCESS:
            return { ...state, loading: false, recipe: action.payload };

        case NameListActionTypes.FETCH_RECIPE_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}