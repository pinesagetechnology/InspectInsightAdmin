import { createSlice } from '@reduxjs/toolkit';
import {
    StructureState,
    StructureActionTypes,
    FETCH_STRUCTURES,
    FETCH_STRUCTURES_SUCCESS,
    FETCH_STRUCTURES_FAILURE,
    SELECT_STRUCTURE,
    UPDATE_STRUCTURE,
    SET_SEARCH_TERM,
    SET_FILTERS,
} from './types';

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
        fetchStructures: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        fetchStructuresSuccess: (state, action) => {
            state.structures = action.payload.structures;
            state.loading = false;
        },
        fetchStructuresFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },
        selectStructure: (state, action) => {
            state.selectedStructure = action.payload.structure;
        },
        updateStructure: (state, action) => {
            state.structures = state.structures.map((structure) =>
                structure.id === action.payload.structure.id
                    ? action.payload.structure
                    : structure
            );
            state.selectedStructure = action.payload.structure;
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
    fetchStructures,
    fetchStructuresSuccess,
    fetchStructuresFailure,
    selectStructure,
    updateStructure,
    setSearchTerm,
    setFilters,
} = structureSlice.actions;

export default structureSlice.reducer;