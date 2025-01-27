import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Region, User } from '../../entities/user';
import { InspectionEntity } from 'entities/inspection';

export interface UserState {
    users: User[];
    selectedUser: User | null;
    userInspections: InspectionEntity[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    selectedUser: null,
    userInspections: [],
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        startAPIprocess(state) {
            state.loading = true;
            state.error = null;
        },
        setUsersData(state, action: PayloadAction<User[]>) {
            state.users = action.payload;
            state.loading = false;
        },
        setSelectedUser(state, action: PayloadAction<User>) {
            state.selectedUser = action.payload;
        },
        fetchUserInspectionsSuccess(state, action: PayloadAction<InspectionEntity[]>) {
            state.userInspections = action.payload;
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
    setUsersData,
    setSelectedUser,
    fetchUserInspectionsSuccess,
    apiProcessFailure,
} = userSlice.actions;

export default userSlice.reducer;