import {getAccountTC} from './auth-reducer';
import {ThunkAction} from "redux-thunk";
import {ActiveStateType} from "./redux-store";

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

type ActionsTypes = SetInitializedType

type SetInitializedType = {
  type: typeof INITIALIZED
}
export const setInitialized = (): SetInitializedType => ({type: INITIALIZED})

export const initializeApp = ():ThunkAction<Promise<void>, ActiveStateType, unknown, ActionsTypes> => async (dispatch) => {
  await dispatch(getAccountTC())
  dispatch(setInitialized())
}