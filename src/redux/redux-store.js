import {createStore, combineReducers, applyMiddleware} from 'redux'
import profileReducer from './profile-reducer'
import authReducer from './auth-reducer'
import usersReducer from './users-reducer'
import navReducer from './nav-reducer'
import dialogsReducer from './dialogs-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers ({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navPage: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store