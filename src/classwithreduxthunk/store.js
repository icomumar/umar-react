import react from 'react';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './employeereducer';
import thunk from 'redux-thunk'
const store = createStore(reducer, applyMiddleware(thunk));
export default store;