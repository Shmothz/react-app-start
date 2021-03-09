import {createStore, combineReducers} from 'redux'
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import navReducer from './navReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers ({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navPage: navReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store