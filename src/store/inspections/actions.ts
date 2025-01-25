// src/store/inspections/actions.ts
import {
    FETCH_INSPECTIONS,
    FETCH_INSPECTIONS_SUCCESS,
    FETCH_INSPECTIONS_FAILURE,
    SELECT_INSPECTION,
    APPROVE_INSPECTION,
    APPROVE_INSPECTION_SUCCESS,
    APPROVE_INSPECTION_FAILURE,
    SET_INSPECTION_FILTERS,
    FetchInspectionsAction,
    FetchInspectionsSuccessAction,
    FetchInspectionsFailureAction,
    SelectInspectionAction,
    ApproveInspectionAction,
    ApproveInspectionSuccessAction,
    ApproveInspectionFailureAction,
    SetInspectionFiltersAction,
} from './types';
import { InspectionEntity } from '../../entities/inspection';

export const fetchInspections = (regionId: string): FetchInspectionsAction => ({
    type: FETCH_INSPECTIONS,
    payload: { regionId },
});

export const fetchInspectionsSuccess = (
    inspections: InspectionEntity[]
): FetchInspectionsSuccessAction => ({
    type: FETCH_INSPECTIONS_SUCCESS,
    payload: { inspections },
});

export const fetchInspectionsFailure = (
    error: string
): FetchInspectionsFailureAction => ({
    type: FETCH_INSPECTIONS_FAILURE,
    payload: { error },
});

export const selectInspection = (
    inspection: InspectionEntity | null
): SelectInspectionAction => ({
    type: SELECT_INSPECTION,
    payload: { inspection },
});

export const approveInspection = (
    inspectionId: string
): ApproveInspectionAction => ({
    type: APPROVE_INSPECTION,
    payload: { inspectionId },
});

export const approveInspectionSuccess = (
    inspection: InspectionEntity
): ApproveInspectionSuccessAction => ({
    type: APPROVE_INSPECTION_SUCCESS,
    payload: { inspection },
});

export const approveInspectionFailure = (
    error: string
): ApproveInspectionFailureAction => ({
    type: APPROVE_INSPECTION_FAILURE,
    payload: { error },
});

export const setInspectionFilters = (filters: {
    structureName?: string;
    inspectionType?: string;
    inspectorName?: string;
    dateRange?: {
        start: Date;
        end: Date;
    };
}): SetInspectionFiltersAction => ({
    type: SET_INSPECTION_FILTERS,
    payload: { filters },
});