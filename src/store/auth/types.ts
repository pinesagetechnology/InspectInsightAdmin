import { User } from '../../entities/user';
import { Structure } from '../../entities/structure';
import { InspectionEntity } from '../../entities/inspection';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  structures: Structure[];
  inspections: InspectionEntity[];
  users: User[];
  loading: boolean;
  error: string | null;
}

// Action Types
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const FETCH_INITIAL_DATA_SUCCESS = 'FETCH_INITIAL_DATA_SUCCESS';
export const FETCH_INITIAL_DATA_FAILURE = 'FETCH_INITIAL_DATA_FAILURE';

// Action Interfaces
export interface AuthLoginAction {
  type: typeof AUTH_LOGIN;
  payload: {
    username: string;
    password: string;
  };
}

export interface AuthLoginSuccessAction {
  type: typeof AUTH_LOGIN_SUCCESS;
  payload: {
    user: User;
  };
}

export interface AuthLoginFailureAction {
  type: typeof AUTH_LOGIN_FAILURE;
  payload: {
    error: string;
  };
}

export interface FetchInitialDataAction {
  type: typeof FETCH_INITIAL_DATA;
  payload: {
    regionId: string;
  };
}

export interface FetchInitialDataSuccessAction {
  type: typeof FETCH_INITIAL_DATA_SUCCESS;
  payload: {
    structures: Structure[];
    inspections: InspectionEntity[];
    users: User[];
  };
}

export interface FetchInitialDataFailureAction {
  type: typeof FETCH_INITIAL_DATA_FAILURE;
  payload: {
    error: string;
  };
}

export type AuthActionTypes =
  | AuthLoginAction
  | AuthLoginSuccessAction
  | AuthLoginFailureAction
  | FetchInitialDataAction
  | FetchInitialDataSuccessAction
  | FetchInitialDataFailureAction;