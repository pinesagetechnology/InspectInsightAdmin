import { call, put, takeLatest } from 'redux-saga/effects';
import { Model } from '../../../models/model';
import { fetchModels, fetchModelsFailure, fetchModelsSuccess } from '../slice';
import * as actions from './actions';
import * as api from '../../../services/modelService';

function* fetchModelsSaga() {
  try {
    yield put(fetchModels());

    const models: Model[] = yield call(api.getModelsData);

    yield put(fetchModelsSuccess(models));
  } catch (error: any) {
    if (error instanceof Error) {
      yield put(fetchModelsFailure(error.message));
    } else {
      yield put(fetchModelsFailure(error));

    }
  }
}

export function* modelsRootSaga() {
  yield takeLatest(actions.FETCH_MODELS_SAGA, fetchModelsSaga);
}
