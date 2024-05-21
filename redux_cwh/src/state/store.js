import { configureStore } from '@reduxjs/toolkit';
// import {thunk} from 'redux-thunk';
import reducers from './reducers/index';
// import { applyMiddleware } from 'redux';

const store = configureStore({reducer:reducers,middleware: (getDefaultMiddleware) => getDefaultMiddleware()}) 

export default store;