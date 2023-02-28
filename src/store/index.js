import { Reducer } from './Reducer';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { commentsWatcher } from '../saga/usersSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(commentsWatcher);