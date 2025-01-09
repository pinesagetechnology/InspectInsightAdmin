import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Model } from "../../models/model";
import { resetStateAction } from '../Common/actions';

interface ModelsState {
    models: Model[];
    isLoading: boolean;
    error?: any;
}

const initialState: ModelsState = {
    models: [],
    isLoading: false,
};

const modelsSlice = createSlice({
    name: "modelsState",
    initialState: initialState,
    reducers: {
        fetchModels: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        fetchModelsSuccess: (state, action: PayloadAction<Model[]>) => {
            state.isLoading = false;
            state.models = action.payload;
        },
        fetchModelsFailure: (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetStateAction, (state) => {
            state.models = [];
            state.isLoading = false;
            state.error = null;
        });
    }
});

export const {
    fetchModels,
    fetchModelsSuccess,
    fetchModelsFailure,
} = modelsSlice.actions;

export default modelsSlice.reducer;