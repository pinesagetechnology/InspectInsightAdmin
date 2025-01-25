// src/store/users/sagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_USERS,
    FETCH_USER_INSPECTIONS,
    CREATE_USER,
    UPDATE_USER,
    FETCH_REGIONS,
    FetchUsersAction,
    FetchUserInspectionsAction,
    CreateUserAction,
    UpdateUserAction,
} from './types';

import { mockUser, mockInspectionData, Regions } from '../../mockData';
import { Region, User } from 'entities/user';
import { InspectionEntity } from 'entities/inspection';
import { 
    apiProcessFailure, 
    createUserSuccess, 
    fetchRegionsSuccess, 
    fetchUserInspectionsSuccess, 
    fetchUsersSuccess, 
    updateUserSuccess 
} from './slice';

// Simulated API calls
const simulateApiCall = async (data: any, delay: number = 1000) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    return data;
};

function* fetchUsersSaga(action: FetchUsersAction) {
    try {
        const users: User[] = yield call(simulateApiCall, [mockUser]);
        yield put(fetchUsersSuccess(users));
    } catch (error: any) {
        yield put(apiProcessFailure(error.message));
    }
}

function* fetchUserInspectionsSaga(action: FetchUserInspectionsAction) {
    try {
        const inspections: InspectionEntity[] = yield call(
            simulateApiCall,
            mockInspectionData.filter(
                inspection => inspection.inspectorName === mockUser.name
            )
        );
        yield put(fetchUserInspectionsSuccess(inspections));
    } catch (error: any) {
        yield put(apiProcessFailure(error.message));
    }
}

function* createUserSaga(action: CreateUserAction) {
    try {
        const newUser = {
            ...action.payload,
            userId: `user-${Date.now()}`,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        const user: User = yield call(simulateApiCall, newUser);
        yield put(createUserSuccess(user));
    } catch (error: any) {
        yield put(apiProcessFailure(error.message));
    }
}

function* updateUserSaga(action: UpdateUserAction) {
    try {
        const updatedUser = {
            ...action.payload.user,
            updatedAt: new Date(),
        };
        const user: User = yield call(simulateApiCall, updatedUser);
        yield put(updateUserSuccess(user));
    } catch (error: any) {
        yield put(apiProcessFailure(error.message));
    }
}

function* fetchRegionsSaga() {
    try {
        const regions: Region[] = yield call(simulateApiCall, Regions);
        yield put(fetchRegionsSuccess(regions));
    } catch (error: any) {
        yield put(apiProcessFailure(error.message));
    }
}

export function* userSagaWatcher() {
    yield takeLatest(FETCH_USERS, fetchUsersSaga);
    yield takeLatest(FETCH_USER_INSPECTIONS, fetchUserInspectionsSaga);
    yield takeLatest(CREATE_USER, createUserSaga);
    yield takeLatest(UPDATE_USER, updateUserSaga);
    yield takeLatest(FETCH_REGIONS, fetchRegionsSaga);
}