import { all, fork } from "redux-saga/effects";
import { sharedRootSaga } from "./Common/sagas";
import { modelsRootSaga } from "./model/sagas";
import { usersRootSaga } from "./user/sagas";

export default function* rootSaga() {
    yield all([
        fork(sharedRootSaga),
        fork(modelsRootSaga),
        fork(usersRootSaga),
    ]);
}
