import { all, call, put, takeEvery, takeLeading } from "@redux-saga/core/effects";
import { actions, Types } from './index';
import { callApi } from "../../common/util/api";
import { makeFetchSaga } from "../../common/util/fetch";
 
function* fetchAutoComplete({ keyword }) {
    const { isSuccess, data } = yield call(callApi, {
        url: '/user/search',
        params: {keyword},
    })
    
    if (isSuccess && data) {
        console.log(data)
        yield put(actions.setValue('autoCompletes', data))
    }
}

function* fetchAllHistory() {
    const { isSuccess, data } = yield call(callApi, {
        url: '/history',
    });

    if (isSuccess && data) {
        yield put(actions.setValue('history', data));
    }
}

export default function* () {
    yield all([
        takeEvery(
            Types.FetchAutoComplete,
            makeFetchSaga({ fetchSaga: fetchAutoComplete, canCache: true })
        ),
        takeLeading(
            Types.FetchAllHistory,
            makeFetchSaga({ fetchSaga: fetchAllHistory, canCache: false }),
        )
    ]);
}