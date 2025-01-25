import { RootState } from "store/rootReducers";

export const getAuthState = (state: RootState) => state.authData;