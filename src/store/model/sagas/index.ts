import { call, put, takeLatest } from 'redux-saga/effects';
import { Structure } from '../../../entities/structure';
import { fetchStructures, fetchStructuresFailure, fetchStructuresSuccess } from '../slice';
import * as actions from './actions';
import * as api from '../../../services/structureService';

function* fetchStructuresSaga() {
  try {
    yield put(fetchStructures());

    const structures: Structure[] = yield call(api.getStructureData);

    yield put(fetchStructuresSuccess(structures));
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(fetchStructuresFailure(error.message));
    } else {
      yield put(fetchStructuresFailure(error));

    }
  }
}

export function* structuresRootSaga() {
  yield takeLatest(actions.FETCH_STRUCTURE_SAGA, fetchStructuresSaga);
}
