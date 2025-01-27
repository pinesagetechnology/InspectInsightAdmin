import { generateInspectionsForDay } from "../../mockData/generateInspectionsForDay ";
import { RootState } from "../rootReducers";
import { subDays } from 'date-fns';

export const getAuthState = (state: RootState) => state.baseData;
export const loggedInUser = (state: RootState) => state.baseData.user;
export const isAuthenticated = (state: RootState) => state.baseData.isAuthenticated;
export const isLoading = (state: RootState) => state.baseData.loading;
export const getRegions = (state: RootState) => state.baseData.regions;
export const getStructures = (state: RootState) => state.baseData.structures;
export const getInspections = (state: RootState) => {

    //return state.baseData.inspections

    // Generate inspections for the last 7 days
    const inspections = Array.from({ length: 7 }, (_, i) => 
        generateInspectionsForDay(subDays(new Date(), 6 - i))).flat();
    return inspections;
};
export const getTotalUsers = (state: RootState) => state.baseData.totalUsers;
export const getTotalStructures = (state: RootState) => state.baseData.totalStructures;
export const getTotalInspections = (state: RootState) => state.baseData.totalInspections;
export const getError = (state: RootState) => state.baseData.error;
