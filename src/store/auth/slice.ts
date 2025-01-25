import {
    AuthState,
    AuthActionTypes,
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    FETCH_INITIAL_DATA,
    FETCH_INITIAL_DATA_SUCCESS,
    FETCH_INITIAL_DATA_FAILURE,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    structures: [],
    inspections: [],
    users: [],
    loading: false,
    error: null,
};

export const authReducer = createSlice({
    name: "authState",
    initialState,
    reducers: {
        authLogin: (state) => {
            state.loading = true;
            state.error = null;
        },
        authLoginSuccess: (state, action: PayloadAction<any>) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.loading = false;
        },
        authLoginFailure: (state, action: PayloadAction<any>) => {
            state.isAuthenticated = false;
            state.user = null;
            state.loading = false;
            state.error = action.payload.error;
        },
        fetchInitialData: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchInitialDataSuccess: (state, action: PayloadAction<any>) => {
            state.structures = action.payload.structures;
            state.inspections = action.payload.inspections;
            state.users = action.payload.users;
            state.loading = false;
        },
        fetchInitialDataFailure: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload.error;
        }
    }
})

export const {
    authLogin,
    authLoginSuccess,
    authLoginFailure,
    fetchInitialData,
    fetchInitialDataSuccess,
    fetchInitialDataFailure
} = authReducer.actions;

export default authReducer.reducer;