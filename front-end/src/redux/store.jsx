

import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {authReducer} from './reducers/authReducers';
import {servicesReducer} from './reducers/servicesReducers'


const rootReducer=combineReducers({
    auth:authReducer,
    servicesReducer:servicesReducer
});

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));
 

export default store;