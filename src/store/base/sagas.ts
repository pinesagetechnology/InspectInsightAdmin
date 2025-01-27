import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AuthenticationResult } from '@azure/msal-browser';
import { Structure } from '../../entities/structure';
import { Region, User } from '../../entities/user';
import * as apis from "../../services/baseService";
import {
    authLogin,
    authLoginFailure,
    authLoginSuccess,
    fetchInitialDataSuccess
} from './slice';
import { APP_SETUP } from './actions';
import { InspectionEntity } from '../../entities/inspection';
import { TaskItemModel } from '../../models/taskItemModel';

function* loginSaga(action: PayloadAction<AuthenticationResult>) {
    try {
        yield put(authLogin());

        const user: User = yield call(apis.fetchUserProfile, action.payload.account.homeAccountId);

        yield put(authLoginSuccess(user));

        const structures: Structure[] = yield call(apis.fetchStructures, user.regionId);

        const users: User[] = yield call(apis.fetchUsers, user.regionId);

        const regions: Region[] = yield call(apis.getRegionsData);

        let totalInspections = 0;
        let allInspections = [] as TaskItemModel[];

        structures.forEach((structure) => {
            totalInspections += (structure.inspections || []).length;
            allInspections = allInspections.concat(structure.inspections?.map(item => {
                return {
                    ...item, structureName: structure.name, location: structure.location.region
                } as TaskItemModel;
            }) || []);
        });

        yield put(fetchInitialDataSuccess({
            structures,
            inspections: allInspections,
            regions,
            users,
            totalInspections,
        }));

    } catch (error: any) {
        yield put(authLoginFailure(error.message));
    }
}

export function* authSagaWatcher() {
    yield takeLatest(APP_SETUP, loginSaga);
}