import { put, takeEvery, call } from 'redux-saga/effects';
import { addComment, ASYNC_ADD_COMMENT, removeComment, ASYNC_REMOVE_COMMENT, addManyComments, ASYNC_ADD_MANY_COMMENTS } from '../store/Reducer';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

const fetchCommentsFromApi = () => fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');

function* addCommentWorker (action) {
    yield delay(1000);
    yield put(addComment(action.payload));
};

function* addManyCommentsWorker () {
    const data = yield call(fetchCommentsFromApi);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(addManyComments(json));
};

function* removeCommentsWorker (action) {
    yield delay(1000);
    yield put(removeComment(action.payload));
}

export function* commentsWatcher() {
    yield takeEvery(ASYNC_ADD_COMMENT, addCommentWorker);
    yield takeEvery(ASYNC_REMOVE_COMMENT, removeCommentsWorker);
    yield takeEvery(ASYNC_ADD_MANY_COMMENTS, addManyCommentsWorker);
}