// src/store/inspections/reducer.ts
import { createSlice } from '@reduxjs/toolkit';
import {
    InspectionState,
    InspectionActionTypes,
    FETCH_INSPECTIONS,
    FETCH_INSPECTIONS_SUCCESS,
    FETCH_INSPECTIONS_FAILURE,
    SELECT_INSPECTION,
    APPROVE_INSPECTION,
    APPROVE_INSPECTION_SUCCESS,
    APPROVE_INSPECTION_FAILURE,
    SET_INSPECTION_FILTERS,
} from './types';

const initialState: InspectionState = {
    inspections: [],
    selectedInspection: null,
    loading: false,
    error: null,
    filters: {},
};

export const inspectionSlice = createSlice({
    name: 'inspectionState',
    initialState,
    reducers: {
        startAPIprocess(state) {
            state.loading = true;
            state.error = null;
        },
        fetchInspectionsSuccess(state, action) {
            state.inspections = action.payload.inspections;
            state.loading = false;
        },
        selectInspection(state, action) {
            state.selectedInspection = action.payload.inspection;
        },
        approveInspectionSuccess(state, action) {
            state.inspections = state.inspections.map((inspection) =>
                inspection.id === action.payload.inspection.id
                    ? action.payload.inspection
                    : inspection
            );
            state.selectedInspection = action.payload.inspection;
            state.loading = false;
        },
        setInspectionFilters(state, action) {
            state.filters = action.payload.filters
        }
    }
});

export const {
    startAPIprocess,
    fetchInspectionsSuccess,
    selectInspection,
    approveInspectionSuccess,
    setInspectionFilters,
} = inspectionSlice.actions;

export default inspectionSlice.reducer;
