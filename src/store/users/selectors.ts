import { RootState } from "store/rootReducers";

export const getUsersState = (state: RootState) => state.usersState;
export const getUsers = (state: RootState) => state.usersState.users;

