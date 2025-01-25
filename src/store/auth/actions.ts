import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    FETCH_INITIAL_DATA,
    FETCH_INITIAL_DATA_SUCCESS,
    FETCH_INITIAL_DATA_FAILURE,
    AuthLoginAction,
    AuthLoginSuccessAction,
    AuthLoginFailureAction,
    FetchInitialDataAction,
    FetchInitialDataSuccessAction,
    FetchInitialDataFailureAction,
} from './types';
import { User } from '../../entities/user';
import { Structure } from '../../entities/structure';
import { InspectionEntity } from '../../entities/inspection';

export const login = (username: string, password: string): AuthLoginAction => ({
    type: AUTH_LOGIN,
    payload: { username, password },
});

export const loginSuccess = (user: User): AuthLoginSuccessAction => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: { user },
});

export const loginFailure = (error: string): AuthLoginFailureAction => ({
    type: AUTH_LOGIN_FAILURE,
    payload: { error },
});

export const fetchInitialData = (regionId: string): FetchInitialDataAction => ({
    type: FETCH_INITIAL_DATA,
    payload: { regionId },
});

export const fetchInitialDataSuccess = (
    structures: Structure[],
    inspections: InspectionEntity[],
    users: User[]
): FetchInitialDataSuccessAction => ({
    type: FETCH_INITIAL_DATA_SUCCESS,
    payload: { structures, inspections, users },
});

export const fetchInitialDataFailure = (error: string): FetchInitialDataFailureAction => ({
    type: FETCH_INITIAL_DATA_FAILURE,
    payload: { error },
});