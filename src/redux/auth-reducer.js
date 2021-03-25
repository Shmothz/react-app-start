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
        isAuth: true
      }
    default:
      return state
  }
}

export const auth = (id, login, email) => ({type: SET_USER, data: {id, login, email}})

export const getAccountTC = () => (dispatch) => {
  loginAPI.login()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(auth(data.data.id, data.data.login, data.data.email))
      }
    })
}

export default authReducer