import {applyMiddleware, createStore} from 'redux';

import Reducer from './reducer';


const store = createStore(Reducer, applyMiddleware());

export default store;