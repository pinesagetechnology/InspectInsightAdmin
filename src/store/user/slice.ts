import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from "../../models/user";
import { resetStateAction } from '../Common/actions';

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

const initUsersState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
}

const usersSlice = createSlice({
  name: "modelsState",
  initialState: initUsersState,
  reducers: {
    fetchUsers: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchUsersSuccess: (state, action: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    fetchUsersFailure: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(resetStateAction, (state) => {
      state.users = initUsersState.users;
      state.isLoading = initUsersState.isLoading;
      state.error = initUsersState.error;
    });
  }
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
} = usersSlice.actions;

export default usersSlice.reducer;