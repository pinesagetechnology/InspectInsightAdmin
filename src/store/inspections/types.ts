// src/store/inspections/types.ts
import { InspectionEntity } from '../../entities/inspection';

export interface InspectionState {
    inspections: InspectionEntity[];
    selectedInspection: InspectionEntity | null;
    loading: boolean;
    error: string | null;
    filters: {
        structureName?: string;
        inspectionType?: string;
        inspectorName?: string;
        dateRange?: {
            start: Date;
            end: Date;
        };
    };
}

export const FETCH_INSPECTIONS = 'FETCH_INSPECTIONS';
export const FETCH_INSPECTIONS_SUCCESS = 'FETCH_INSPECTIONS_SUCCESS';
export const FETCH_INSPECTIONS_FAILURE = 'FETCH_INSPECTIONS_FAILURE';
export const SELECT_INSPECTION = 'SELECT_INSPECTION';
export const APPROVE_INSPECTION = 'APPROVE_INSPECTION';
export const APPROVE_INSPECTION_SUCCESS = 'APPROVE_INSPECTION_SUCCESS';
export const APPROVE_INSPECTION_FAILURE = 'APPROVE_INSPECTION_FAILURE';
export const SET_INSPECTION_FILTERS = 'SET_INSPECTION_FILTERS';

export interface FetchInspectionsAction {
    type: typeof FETCH_INSPECTIONS;
    payload: { regionId: string };
}

export interface FetchInspectionsSuccessAction {
    type: typeof FETCH_INSPECTIONS_SUCCESS;
    payload: { inspections: InspectionEntity[] };
}

export interface FetchInspectionsFailureAction {
    type: typeof FETCH_INSPECTIONS_FAILURE;
    payload: { error: string };
}

export interface SelectInspectionAction {
    type: typeof SELECT_INSPECTION;
    payload: { inspection: InspectionEntity | null };
}

export interface ApproveInspectionAction {
    type: typeof APPROVE_INSPECTION;
    payload: { inspectionId: string };
}

export interface ApproveInspectionSuccessAction {
    type: typeof APPROVE_INSPECTION_SUCCESS;
    payload: { inspection: InspectionEntity };
}

export interface ApproveInspectionFailureAction {
    type: typeof APPROVE_INSPECTION_FAILURE;
    payload: { error: string };
}

export interface SetInspectionFiltersAction {
    type: typeof SET_INSPECTION_FILTERS;
    payload: {
        filters: {
            structureName?: string;
            inspectionType?: string;
            inspectorName?: string;
            dateRange?: {
                start: Date;
                end: Date;
            };
        };
    };
}

export type InspectionActionTypes =
    | FetchInspectionsAction
    | FetchInspectionsSuccessAction
    | FetchInspectionsFailureAction
    | SelectInspectionAction
    | ApproveInspectionAction
    | ApproveInspectionSuccessAction
    | ApproveInspectionFailureAction
    | SetInspectionFiltersAction;