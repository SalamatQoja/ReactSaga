import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { recipeReducer } from "../Reducer";
import { rootSaga } from "../rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store2 = configureStore({
    reducer: {
        recipe: recipeReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store2.getState>
export type AppDispatch = typeof store2.dispatch;