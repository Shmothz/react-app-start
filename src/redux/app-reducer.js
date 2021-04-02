import {getAccountTC} from './auth-reducer';

const INITIALIZED = 'app/INITIALIZED'

let initialState = {
  initialized: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state
  }
}

export const setInitialized = () => ({type: INITIALIZED})

export const initializeApp = () => async (dispatch) => {
  await dispatch(getAccountTC())
  dispatch(setInitialized())
}