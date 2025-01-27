import { all, fork } from "redux-saga/effects";
import { sharedRootSaga } from "./common/sagas";
import { userSagaWatcher } from "./users/sagas";
import { authSagaWatcher } from "./base/sagas";
import { structureSagaWorker } from "./structure/saga";

export default function* rootSaga() {
    yield all([
        fork(authSagaWatcher),
        fork(sharedRootSaga),
        fork(structureSagaWorker),
        fork(userSagaWatcher),
    ]);
}
