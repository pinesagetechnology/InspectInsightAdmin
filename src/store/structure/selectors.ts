import { RootState } from "../rootReducers";

export const selectStructures = (state: RootState) => state.structureData;
export const selectStructureList = (state: RootState) => state.structureData.structures;

