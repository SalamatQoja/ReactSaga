export interface NameList {
    id: number;
    name: string;
    job: string;
}

export interface RecipeState {
    recipe: NameList[];
    loading: boolean;
    error: string | null;

}

export const NameListActionTypes = {
    FETCH_RECIPE_REQUEST: "FETCH_RECIPE_REQUEST",
    FETCH_RECIPE_SUCCESS: "FETCH_RECIPE_SUCCESS",
    FETCH_RECIPE_FAILURE: "FETCH_RECIPE_FAILURE",
} as const

export type NameListActionTypes = 
typeof NameListActionTypes[keyof typeof NameListActionTypes]

interface fetchRecipeRequestAction {
    type: typeof NameListActionTypes.FETCH_RECIPE_REQUEST;
}

interface fetchRecipeSuccessAction {
    type: typeof NameListActionTypes.FETCH_RECIPE_SUCCESS;
    payload: NameList[];
}

interface fetchRecipeFailureAction {
    type: typeof NameListActionTypes.FETCH_RECIPE_FAILURE;
    payload: string;
}

export type NameListAction =
    | fetchRecipeRequestAction
    | fetchRecipeSuccessAction
    | fetchRecipeFailureAction