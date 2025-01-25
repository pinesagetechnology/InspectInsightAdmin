import { call, put, takeLatest } from 'redux-saga/effects';
import {
    AUTH_LOGIN,
    FETCH_INITIAL_DATA,
    AuthLoginAction,
    FetchInitialDataAction
} from './types';
import {
    loginSuccess,
    loginFailure,
    fetchInitialDataSuccess,
    fetchInitialDataFailure
} from './actions';
import { mockAuthResult, mockUser, mockStructures, mockInspectionData } from '../../mockData';
import { AuthenticationResult } from '@azure/msal-browser';
import { User } from '../../entities/user';
import { Structure } from 'entities/structure';
import { InspectionEntity } from 'entities/inspection';

// Simulated API calls
const simulateLogin = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockAuthResult;
};

const fetchUserProfile = async (userId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockUser;
};

const fetchStructures = async (regionId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockStructures;
};

const fetchInspections = async (regionId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockInspectionData;
};

const fetchUsers = async (regionId: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [mockUser]; // In a real app, this would return multiple users
};

function* loginSaga(action: AuthLoginAction) {
    try {
        const authResult: AuthenticationResult = yield call(simulateLogin);
        const user: User = yield call(fetchUserProfile, authResult.account.homeAccountId);
        yield put(loginSuccess(user));

        // After successful login, fetch initial data
        yield put({
            type: FETCH_INITIAL_DATA,
            payload: { regionId: user.regionId }
        });
    } catch (error: any) {
        yield put(loginFailure(error.message));
    }
}

function* fetchInitialDataSaga(action: FetchInitialDataAction) {
    try {
        const { regionId } = action.payload;

        // Fetch all required data in parallel

        const structures: Structure[] = yield call(fetchStructures, regionId);
        const inspections: InspectionEntity[] = yield call(fetchInspections, regionId);
        const users: User[] = yield call(fetchUsers, regionId);

        yield put(fetchInitialDataSuccess(structures, inspections, users));
    } catch (error: any) {
        yield put(fetchInitialDataFailure(error.message));
    }
}

export function* authSagaWatcher() {
    yield takeLatest(AUTH_LOGIN, loginSaga);
    yield takeLatest(FETCH_INITIAL_DATA, fetchInitialDataSaga);
}