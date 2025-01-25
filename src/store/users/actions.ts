// src/store/users/actions.ts
import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USER_INSPECTIONS_SUCCESS,
    FETCH_USER_INSPECTIONS_FAILURE,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    FETCH_REGIONS_SUCCESS,
    FETCH_REGIONS_FAILURE,
    FetchUsersSuccessAction,
    FetchUsersFailureAction,
    FetchUserInspectionsSuccessAction,
    FetchUserInspectionsFailureAction,
    CreateUserAction,
    CreateUserSuccessAction,
    CreateUserFailureAction,
    UpdateUserAction,
    UpdateUserSuccessAction,
    UpdateUserFailureAction,
    FetchRegionsAction,
    FetchRegionsSuccessAction,
    FetchRegionsFailureAction,
} from './types';
import { User, Region } from '../../entities/user';
import { InspectionEntity } from '../../entities/inspection';

// export const fetchUsersSuccess = (users: User[]): FetchUsersSuccessAction => ({
//     type: FETCH_USERS_SUCCESS,
//     payload: { users },
// });

// export const fetchUsersFailure = (error: string): FetchUsersFailureAction => ({
//     type: FETCH_USERS_FAILURE,
//     payload: { error },
// });

// export const fetchUserInspectionsSuccess = (
//     inspections: InspectionEntity[]
// ): FetchUserInspectionsSuccessAction => ({
//     type: FETCH_USER_INSPECTIONS_SUCCESS,
//     payload: { inspections },
// });

// export const fetchUserInspectionsFailure = (
//     error: string
// ): FetchUserInspectionsFailureAction => ({
//     type: FETCH_USER_INSPECTIONS_FAILURE,
//     payload: { error },
// });

// // Create User
// export const createUser = (
//     userData: Omit<User, 'userId' | 'createdAt' | 'updatedAt'>
// ): CreateUserAction => ({
//     type: CREATE_USER,
//     payload: userData,
// });

// export const createUserSuccess = (user: User): CreateUserSuccessAction => ({
//     type: CREATE_USER_SUCCESS,
//     payload: { user },
// });

// export const createUserFailure = (error: string): CreateUserFailureAction => ({
//     type: CREATE_USER_FAILURE,
//     payload: { error },
// });

// // Update User
// export const updateUser = (user: User): UpdateUserAction => ({
//     type: UPDATE_USER,
//     payload: { user },
// });

// export const updateUserSuccess = (user: User): UpdateUserSuccessAction => ({
//     type: UPDATE_USER_SUCCESS,
//     payload: { user },
// });

// export const updateUserFailure = (error: string): UpdateUserFailureAction => ({
//     type: UPDATE_USER_FAILURE,
//     payload: { error },
// });


// export const fetchRegionsSuccess = (regions: Region[]): FetchRegionsSuccessAction => ({
//     type: FETCH_REGIONS_SUCCESS,
//     payload: { regions },
// });

// export const fetchRegionsFailure = (error: string): FetchRegionsFailureAction => ({
//     type: FETCH_REGIONS_FAILURE,
//     payload: { error },
// });