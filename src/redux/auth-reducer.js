import {loginAPI} from '../api/api';

const SET_USER = 'SET_USER'

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

export const getAccountTC = () => (dispatch) => {
  loginAPI.me()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(auth(data.data.id, data.data.login, data.data.email, true))
      }
    })
}

export const loginTC = (email, password, rememberMe) => (dispatch) => {
  loginAPI.login(email, password, rememberMe)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(getAccountTC())
      }
    })
}
export const logoutTC = () => (dispatch) => {
  loginAPI.logout()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(auth(null, null , null, false))
      }
    })
}


export default authReducer