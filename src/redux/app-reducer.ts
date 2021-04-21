import {getAccountTC} from './auth-reducer';

const INITIALIZED = 'app/INITIALIZED'

let initialState = {
  initialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: any): InitialStateType => {
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
type SetInitializedType = {
  type: typeof INITIALIZED
}
export const setInitialized = (): SetInitializedType => ({type: INITIALIZED})

export const initializeApp = () => async (dispatch: any) => {
  await dispatch(getAccountTC())
  dispatch(setInitialized())
}