import {combineReducers} from "redux";
import {commentsReducer} from "./commentsReducer";

export const rootReducer = combineReducers({
    commentsReducer
})

export type RootState = ReturnType<typeof rootReducer>