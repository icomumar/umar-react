import react from 'react';
import { createStore } from 'redux';
import { reducer } from './employeereducer';

const store = createStore(reducer);
export default store;