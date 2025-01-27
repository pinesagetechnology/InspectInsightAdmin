import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
    FETCH_USERS,
    FETCH_USER_INSPECTIONS,
    CREATE_USER,
    UPDATE_USER,
} from './actions';
import { User } from '../../entities/user';
import { InspectionEntity } from 'entities/inspection';
import {
    apiProcessFailure,
    fetchUserInspectionsSuccess,
    setUsersData,
    startAPIprocess,
} from './slice';
import * as apis from '../../services/userService';
import { v4 as uuidv4 } from 'uuid';
import { getUsers } from './selectors';

function* fetchUserInspectionsSaga(action: PayloadAction<string>) {
    try {
        yield put(startAPIprocess());

        const inspections: InspectionEntity[] = yield call(apis.getUsersInspectionData, action.payload);

        yield put(fetchUserInspectionsSuccess(inspections));
    } catch (error: any) {
        yield put(apiProcessFailure(error.message));
    }
}

function* createUserSaga(action: PayloadAction<User>) {
    try {
        yield put(startAPIprocess());

        const newUser = {
            ...action.payload,
            userId: uuidv4(),
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const user: User = yield call(apis.createUser, newUser);

        const users: User[] = yield select(getUsers);

        const updatedList = [...users, user];
        
        yield put(setUsersData(updatedList));
    } catch (error: any) {
        yield put(apiProcessFailure(error.message));
    }
}

function* updateUserSaga(action: PayloadAction<User>) {
    try {
        yield put(startAPIprocess());

        const updatedUser = {
            ...action.payload,
            updatedAt: new Date(),
        };
        
        yield call(apis.updateUser, updatedUser);

        const users: User[] = yield select(getUsers);

        const updatedList = users.map((user: User) =>
            user.userId === action.payload.userId ? updatedUser : user
        );
        
        yield put(setUsersData(updatedList));
    } catch (error: any) {
        yield put(apiProcessFailure(error.message));
    }
}

export function* userSagaWatcher() {
    yield takeLatest(FETCH_USER_INSPECTIONS, fetchUserInspectionsSaga);
    yield takeLatest(CREATE_USER, createUserSaga);
    yield takeLatest(UPDATE_USER, updateUserSaga);
}