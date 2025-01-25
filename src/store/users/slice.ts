import { create } from 'lodash';
import {
    UserState,
    UserActionTypes,
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    SELECT_USER,
    FETCH_USER_INSPECTIONS,
    FETCH_USER_INSPECTIONS_SUCCESS,
    FETCH_USER_INSPECTIONS_FAILURE,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    FETCH_REGIONS,
    FETCH_REGIONS_SUCCESS,
    FETCH_REGIONS_FAILURE,
} from './types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { name } from '@azure/msal-browser/dist/packageMetadata';
import { red } from '@mui/material/colors';
import { Region, User } from 'entities/user';
import { InspectionEntity } from 'entities/inspection';

const initialState: UserState = {
    users: [],
    selectedUser: null,
    userInspections: [],
    loading: false,
    error: null,
    regions: [],
};

const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        startAPIprocess(state) {
            state.loading = true;
            state.error = null;
        },
        fetchUsersSuccess(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
            state.loading = false;
        },
        selectUser(state, action: PayloadAction<User>) {
            state.selectedUser = action.payload;
            state.userInspections = []; // Clear previous inspections
        },
        fetchUserInspectionsSuccess(state, action: PayloadAction<InspectionEntity[]>) {
            state.userInspections = action.payload;
            state.loading = false;
        },
        createUserSuccess(state, action: PayloadAction<User>) {
            state.users.push(action.payload);
            state.loading = false;
        },
        updateUserSuccess(state, action: PayloadAction<User>) {
            state.users = state.users.map((user) =>
                user.userId === action.payload.userId ? action.payload : user
            );
            state.selectedUser = action.payload;
            state.loading = false;
        },
        fetchRegionsSuccess(state, action: PayloadAction<Region[]>) {
            state.regions = action.payload;
            state.loading = false;
        },
        apiProcessFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const {
    startAPIprocess,
    fetchUsersSuccess,
    selectUser,
    fetchUserInspectionsSuccess,
    createUserSuccess,
    updateUserSuccess,
    fetchRegionsSuccess,
    apiProcessFailure,
} = userSlice.actions;

export default userSlice.reducer;