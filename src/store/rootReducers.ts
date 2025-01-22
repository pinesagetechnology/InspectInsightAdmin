import { combineReducers } from "@reduxjs/toolkit";
import overlayState from "./Common/slice";
import StructuresState from "./model/slice";
import UsersState from "./user/slice";

const rootReducer = combineReducers({
    overlayState,
    StructuresState,
    UsersState
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;