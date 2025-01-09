import { call, put, takeLatest } from 'redux-saga/effects';
import { User } from '../../../models/user';
import * as actions from './actions';
import { fetchUsers, fetchUsersFailure, fetchUsersSuccess } from '../slice';
import * as api from '../../../services/userService';

function* fetchUsersSaga() {
  try {
    yield put(fetchUsers());

    const users: User[] = yield call(api.getUsersData);

    yield put(fetchUsersSuccess(users));
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(fetchUsersFailure(error.message));
    } else {
      yield put(fetchUsersFailure(error));

    }
  }
}

export function* usersRootSaga() {
  yield takeLatest(actions.FETCH_USERS_SAGA, fetchUsersSaga);
}
