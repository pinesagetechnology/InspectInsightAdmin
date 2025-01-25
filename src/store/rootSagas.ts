import { all, fork } from "redux-saga/effects";
import { sharedRootSaga } from "./common/sagas";
import { userSagaWatcher } from "./users/sagas";
import { structuresRootSaga } from "./model/sagas";
import { authSagaWatcher } from "./auth/sagas";

export default function* rootSaga() {
    yield all([
        fork(authSagaWatcher),
        fork(sharedRootSaga),
        fork(structuresRootSaga),
        fork(userSagaWatcher),
    ]);
}
