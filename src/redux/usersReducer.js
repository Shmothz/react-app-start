const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET_USERS'
const COUNT_PAGES = 'COUNT_PAGES'
const SET_PAGE = 'SET_PAGE'

let initialState = {
  users: [],
  usersOnPage: 5,
  activePage: 1,
  totalCount: 0
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(i => {
          if (i.id === action.userId) {
            return {...i, followed: true}
          }
          return i
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(i => {
          if (i.id === action.userId) {
            return {...i, followed: false}
          }
          return i
        })
      }
    case GET_USERS:
      return {
        ...state,
        users: [
          ...action.users
        ]
      }
    case COUNT_PAGES:
      return {
        ...state,
        totalCount: action.count
      }
    case SET_PAGE:
      return {
        ...state,
        activePage: action.page
      }
    default:
      return state
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const getUsersAC = (users) => ({type: GET_USERS, users})
export const setPageAC = (page) => ({type: SET_PAGE, page})
export const countAllUsersAC = (totalCount) => ({type: COUNT_PAGES, count: totalCount})



export default usersReducer