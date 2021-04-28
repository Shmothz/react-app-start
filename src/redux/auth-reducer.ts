import {loginAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {ThunkAction} from "redux-thunk";
import {ActiveStateType} from "./redux-store";
import {AnyAction} from "redux";

const SET_USER = 'auth/SET_USER'

let initialState = {
  data: {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null
  },
  isAuth: false
}

type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

type ActionsTypes = AuthType

type AuthType = {
  type: typeof SET_USER
  data: {
    id: number | null
    login: string | null
    email: string | null
  }
  isAuth: boolean
}
export const auth = (id: number | null, login: string | null, email: string | null, isAuth: boolean): AuthType => ({type: SET_USER, data: {id, login, email}, isAuth})

export const getAccountTC = ():ThunkAction<Promise<void>, ActiveStateType, unknown, ActionsTypes> =>
    async (dispatch) => {
  const data = await loginAPI.me()
  if (data.resultCode === 0) {
    dispatch(auth(data.data.id, data.data.login, data.data.email, true))
  }
}
export const loginTC = (email: string, password: string, rememberMe: boolean):ThunkAction<Promise<void>, ActiveStateType, unknown, AnyAction> =>
    async (dispatch) => {
  const data = await loginAPI.login(email, password, rememberMe)
  if (data.data.resultCode === 0) {
    dispatch(getAccountTC())
  } else {
    let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error"
    dispatch(stopSubmit('Login', {_error: message}))
  }
}
export const logoutTC = ():ThunkAction<Promise<void>, ActiveStateType, unknown, ActionsTypes> =>
    async (dispatch) => {
  const data = await loginAPI.logout()
  if (data.resultCode === 0) {
    dispatch(auth(null, null, null, false))
  }
}


export default authReducer