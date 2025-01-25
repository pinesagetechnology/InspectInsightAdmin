// src/store/structures/actions.ts
import {
    FETCH_STRUCTURES,
    FETCH_STRUCTURES_SUCCESS,
    FETCH_STRUCTURES_FAILURE,
    SELECT_STRUCTURE,
    UPDATE_STRUCTURE,
    SET_SEARCH_TERM,
    SET_FILTERS,
    FetchStructuresAction,
    FetchStructuresSuccessAction,
    FetchStructuresFailureAction,
    SelectStructureAction,
    UpdateStructureAction,
    SetSearchTermAction,
    SetFiltersAction,
} from './types';
import { Structure } from '../../entities/structure';

export const fetchStructures = (regionId: string): FetchStructuresAction => ({
    type: FETCH_STRUCTURES,
    payload: { regionId },
});

export const fetchStructuresSuccess = (structures: Structure[]): FetchStructuresSuccessAction => ({
    type: FETCH_STRUCTURES_SUCCESS,
    payload: { structures },
});

export const fetchStructuresFailure = (error: string): FetchStructuresFailureAction => ({
    type: FETCH_STRUCTURES_FAILURE,
    payload: { error },
});

export const selectStructure = (structure: Structure | null): SelectStructureAction => ({
    type: SELECT_STRUCTURE,
    payload: { structure },
});

export const updateStructure = (structure: Structure): UpdateStructureAction => ({
    type: UPDATE_STRUCTURE,
    payload: { structure },
});

export const setSearchTerm = (searchTerm: string): SetSearchTermAction => ({
    type: SET_SEARCH_TERM,
    payload: { searchTerm },
});

export const setFilters = (filters: { type?: string; region?: string }): SetFiltersAction => ({
    type: SET_FILTERS,
    payload: { filters },
});