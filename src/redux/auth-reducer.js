import {loginAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER = 'auth/SET_USER'

let initialState = {
  data: {
    id: null,
    login: null,
    email: null
  },
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.data,
        isAuth: action.isAuth
      }
    default:
      return state
  }
}

export const auth = (id, login, email, isAuth) => ({type: SET_USER, data: {id, login, email}, isAuth})

export const getAccountTC = () => async (dispatch) => {
  const data = await loginAPI.me()
  if (data.resultCode === 0) {
    dispatch(auth(data.data.id, data.data.login, data.data.email, true))
  }
}

export const loginTC = (email, password, rememberMe) => async (dispatch) => {
  const data = await loginAPI.login(email, password, rememberMe)
  if (data.data.resultCode === 0) {
    dispatch(getAccountTC())
  } else {
    let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error"
    dispatch(stopSubmit('Login', {_error: message}))
  }
}
export const logoutTC = () => async (dispatch) => {
  const data = await loginAPI.logout()
  if (data.resultCode === 0) {
    dispatch(auth(null, null, null, false))
  }
}


export default authReducer