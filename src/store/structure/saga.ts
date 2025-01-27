import { call, put, takeLatest, select } from 'redux-saga/effects';
import { Structure } from '../../entities/structure';
import { 
    setStructureData, 
    setStructuresFailure, 
    startAPIProcess 
} from './slice';
import { selectStructureList } from './selectors';
import { PayloadAction } from '@reduxjs/toolkit';
import * as apis from "../../services/structureService";
import { UPDATE_STRUCTURE } from './actions';

function* updateStructureSaga(action: PayloadAction<Structure>) {
    try {
        yield put(startAPIProcess());

        const updatedStructure: Structure = yield call(apis.updateStructure, action.payload);

        const structureList: Structure[] = yield select(selectStructureList);

        const updatedStructureList = structureList.map((structure) => {
            if (structure.id === updatedStructure.id) {
                return updatedStructure;
            }

            return structure;
        });

        yield put(setStructureData(updatedStructureList));
    } catch (error: any) {
        yield put(setStructuresFailure(error.message));
    }
}

// Root Saga
export function* structureSagaWorker() {
    yield takeLatest(UPDATE_STRUCTURE, updateStructureSaga);
}