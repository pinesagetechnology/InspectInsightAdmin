import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Structure } from '../../entities/structure';
import { InspectionEntity } from '../../entities/inspection';
import { Region, User } from '../../entities/user';

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    structures: Structure[];
    inspections: InspectionEntity[];
    regions: Region[];
    loading: boolean;
    error: string | null;
    totalUsers: number;
    totalStructures: number;
    totalInspections: number;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    structures: [],
    inspections: [],
    loading: false,
    error: null,
    regions: [],
    totalUsers: 0,
    totalStructures: 0,
    totalInspections: 0,
};

export const authReducer = createSlice({
    name: "baseState",
    initialState,
    reducers: {
        authLogin: (state) => {
            state.loading = true;
            state.error = null;
        },
        authLoginSuccess: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        authLoginFailure: (state, action: PayloadAction<any>) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
            state.error = action.payload;
        },
        fetchInitialDataSuccess: (state, action: PayloadAction<any>) => {
            state.structures = action.payload.structures;
            state.inspections = action.payload.inspections;
            state.regions = action.payload.regions;
            state.totalUsers = action.payload.users.length;
            state.totalStructures = action.payload.structures.length;
            state.totalInspections = action.payload.totalInspections;
            state.loading = false;
        }
    }
})

export const {
    authLogin,
    authLoginSuccess,
    authLoginFailure,
    fetchInitialDataSuccess,
} = authReducer.actions;

export default authReducer.reducer;