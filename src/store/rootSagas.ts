import { all, fork } from "redux-saga/effects";
import { sharedRootSaga } from "./Common/sagas";
import { usersRootSaga } from "./user/sagas";
import { structuresRootSaga } from "./model/sagas";

export default function* rootSaga() {
    yield all([
        fork(sharedRootSaga),
        fork(structuresRootSaga),
        fork(usersRootSaga),
    ]);
}
