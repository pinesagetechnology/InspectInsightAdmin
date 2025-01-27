import { combineReducers } from "@reduxjs/toolkit";
import overlayState from "./common/slice";
import baseData from "./base/slice";
import structureData from "./structure/slice";
import usersState from './users/slice';
import inspectionState from './inspections/slice';

const rootReducer = combineReducers({
    baseData,
    structureData,
    overlayState,
    usersState,
    inspectionState
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;