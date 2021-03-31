import {getAccountTC} from './auth-reducer';

const INITIALIZED = 'INITIALIZED'

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

export const initializeApp = () => (dispatch) => {
  Promise.all([dispatch(getAccountTC())]).then( () => {
    dispatch(setInitialized())
  })
}