// src/store/structures/types.ts
import { Structure } from '../../entities/structure';

export interface StructureState {
    structures: Structure[];
    selectedStructure: Structure | null;
    loading: boolean;
    error: string | null;
    searchTerm: string;
    filters: {
        type?: string;
        region?: string;
    };
}

export const FETCH_STRUCTURES = 'FETCH_STRUCTURES';
export const FETCH_STRUCTURES_SUCCESS = 'FETCH_STRUCTURES_SUCCESS';
export const FETCH_STRUCTURES_FAILURE = 'FETCH_STRUCTURES_FAILURE';
export const SELECT_STRUCTURE = 'SELECT_STRUCTURE';
export const UPDATE_STRUCTURE = 'UPDATE_STRUCTURE';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_FILTERS = 'SET_FILTERS';

export interface FetchStructuresAction {
    type: typeof FETCH_STRUCTURES;
    payload: { regionId: string };
}

export interface FetchStructuresSuccessAction {
    type: typeof FETCH_STRUCTURES_SUCCESS;
    payload: { structures: Structure[] };
}

export interface FetchStructuresFailureAction {
    type: typeof FETCH_STRUCTURES_FAILURE;
    payload: { error: string };
}

export interface SelectStructureAction {
    type: typeof SELECT_STRUCTURE;
    payload: { structure: Structure | null };
}

export interface UpdateStructureAction {
    type: typeof UPDATE_STRUCTURE;
    payload: { structure: Structure };
}

export interface SetSearchTermAction {
    type: typeof SET_SEARCH_TERM;
    payload: { searchTerm: string };
}

export interface SetFiltersAction {
    type: typeof SET_FILTERS;
    payload: { filters: { type?: string; region?: string } };
}

export type StructureActionTypes =
    | FetchStructuresAction
    | FetchStructuresSuccessAction
    | FetchStructuresFailureAction
    | SelectStructureAction
    | UpdateStructureAction
    | SetSearchTermAction
    | SetFiltersAction;