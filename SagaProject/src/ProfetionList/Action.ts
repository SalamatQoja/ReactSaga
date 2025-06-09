import { NameListActionTypes, type NameList } from "./types";

export const fetchRecipeRequest = () => ({
    type: NameListActionTypes.FETCH_RECIPE_REQUEST,
});
export const fetchRecipeSuccess = (recipe: NameList[]) => ({
    type: NameListActionTypes.FETCH_RECIPE_SUCCESS,
    payload: recipe,
});
export const fetchRecipeFailure = (error: string) => ({
    type: NameListActionTypes.FETCH_RECIPE_FAILURE,
    payload: error,
});
