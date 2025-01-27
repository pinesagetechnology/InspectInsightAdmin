import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Structure } from 'entities/structure';

export interface StructureState {
    structures: Structure[];
    selectedStructure: Structure | null;
    searchTerm: string;
    loading: boolean;
    error: string | null;
    filters: {
        type?: string;
        region?: string;
    };
}

const initialState: StructureState = {
    structures: [],
    selectedStructure: null,
    loading: false,
    error: null,
    searchTerm: '',
    filters: {},
};

export const structureSlice = createSlice({
    name: "structureState",
    initialState,
    reducers: {
        startAPIProcess: (state) => {
            state.loading = true;
            state.error = null;
        },
        setStructureData: (state, action: PayloadAction<Structure[]>) => {
            state.loading = false;
            state.structures = action.payload;
        },
        setStructuresFailure: (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },
        setSelectedStructure: (state, action: PayloadAction<Structure>) => {
            state.selectedStructure = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload.searchTerm;
        },
        setFilters: (state, action) => {
            state.filters = action.payload.filters;
        },
    }
});

export const {
    startAPIProcess,
    setStructureData,
    setStructuresFailure,
    setSelectedStructure,
    setSearchTerm,
    setFilters,
} = structureSlice.actions;

export default structureSlice.reducer;