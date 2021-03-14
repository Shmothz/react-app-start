const SET_USER = 'SET_USER'

let initialState = {
  data: {
    id: null,
    login: null,
    email: null
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

export const auth = (id, login, email) => ({type: SET_USER, data: {id, login, email}})

export default authReducer