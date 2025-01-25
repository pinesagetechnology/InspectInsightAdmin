import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Structure } from "../../entities/structure";
import { resetStateAction } from '../common/actions';

interface StructuresState {
    structures: Structure[];
    isLoading: boolean;
    error?: any;
}

const initialState: StructuresState = {
    structures: [],
    isLoading: false,
};

const structuresSlice = createSlice({
    name: "structuresState",
    initialState: initialState,
    reducers: {
        fetchStructures: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchStructuresSuccess: (state, action: PayloadAction<Structure[]>) => {
            state.isLoading = false;
            state.structures = action.payload;
        },
        fetchStructuresFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetStateAction, (state) => {
            state.structures = [];
            state.isLoading = false;
            state.error = null;
        });
    }
});

export const {
    fetchStructures,
    fetchStructuresSuccess,
    fetchStructuresFailure,
} = structuresSlice.actions;

export default structuresSlice.reducer;