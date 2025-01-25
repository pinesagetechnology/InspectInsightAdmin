// src/store/users/types.ts
import { Region, User } from '../../entities/user';
import { InspectionEntity } from '../../entities/inspection';

export interface UserState {
    users: User[];
    selectedUser: User | null;
    userInspections: InspectionEntity[];
    loading: boolean;
    error: string | null;
    regions: Region[];
}

// Action Types
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const SELECT_USER = 'SELECT_USER';
export const FETCH_USER_INSPECTIONS = 'FETCH_USER_INSPECTIONS';
export const FETCH_USER_INSPECTIONS_SUCCESS = 'FETCH_USER_INSPECTIONS_SUCCESS';
export const FETCH_USER_INSPECTIONS_FAILURE = 'FETCH_USER_INSPECTIONS_FAILURE';
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const FETCH_REGIONS = 'FETCH_REGIONS';
export const FETCH_REGIONS_SUCCESS = 'FETCH_REGIONS_SUCCESS';
export const FETCH_REGIONS_FAILURE = 'FETCH_REGIONS_FAILURE';

// Action Interfaces
export interface FetchUsersAction {
    type: typeof FETCH_USERS;
    payload: { regionId: string };
}

export interface FetchUsersSuccessAction {
    type: typeof FETCH_USERS_SUCCESS;
    payload: { users: User[] };
}

export interface FetchUsersFailureAction {
    type: typeof FETCH_USERS_FAILURE;
    payload: { error: string };
}

export interface SelectUserAction {
    type: typeof SELECT_USER;
    payload: { user: User | null };
}

export interface FetchUserInspectionsAction {
    type: typeof FETCH_USER_INSPECTIONS;
    payload: { userId: string };
}

export interface FetchUserInspectionsSuccessAction {
    type: typeof FETCH_USER_INSPECTIONS_SUCCESS;
    payload: { inspections: InspectionEntity[] };
}

export interface FetchUserInspectionsFailureAction {
    type: typeof FETCH_USER_INSPECTIONS_FAILURE;
    payload: { error: string };
}

export interface CreateUserAction {
    type: typeof CREATE_USER;
    payload: Omit<User, 'userId' | 'createdAt' | 'updatedAt'>;
}

export interface CreateUserSuccessAction {
    type: typeof CREATE_USER_SUCCESS;
    payload: { user: User };
}

export interface CreateUserFailureAction {
    type: typeof CREATE_USER_FAILURE;
    payload: { error: string };
}

export interface UpdateUserAction {
    type: typeof UPDATE_USER;
    payload: { user: User };
}

export interface UpdateUserSuccessAction {
    type: typeof UPDATE_USER_SUCCESS;
    payload: { user: User };
}

export interface UpdateUserFailureAction {
    type: typeof UPDATE_USER_FAILURE;
    payload: { error: string };
}

export interface FetchRegionsAction {
    type: typeof FETCH_REGIONS;
}

export interface FetchRegionsSuccessAction {
    type: typeof FETCH_REGIONS_SUCCESS;
    payload: { regions: Region[] };
}

export interface FetchRegionsFailureAction {
    type: typeof FETCH_REGIONS_FAILURE;
    payload: { error: string };
}

export type UserActionTypes =
    | FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersFailureAction
    | SelectUserAction
    | FetchUserInspectionsAction
    | FetchUserInspectionsSuccessAction
    | FetchUserInspectionsFailureAction
    | CreateUserAction
    | CreateUserSuccessAction
    | CreateUserFailureAction
    | UpdateUserAction
    | UpdateUserSuccessAction
    | UpdateUserFailureAction
    | FetchRegionsAction
    | FetchRegionsSuccessAction
    | FetchRegionsFailureAction;