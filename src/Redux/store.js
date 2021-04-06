import {applyMiddleware, createStore} from 'redux';
import profileReducer from './profile/profileReducer'
import thunk from 'redux-thunk';

const store = createStore(profileReducer,applyMiddleware(thunk))

export default store;