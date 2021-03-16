const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET_USERS'
const COUNT_PAGES = 'COUNT_PAGES'
const SET_PAGE = 'SET_PAGE'
const IS_FETCHING = 'IS_FETCHING'
const IS_TOGGLE_FOLLOW = 'IS_TOGGLE_FOLLOW'

let initialState = {
  users: [],
  usersOnPage: 5,
  activePage: 1,
  totalCount: 0,
  isFetching: false,
  isToggleFollow: []
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
    case IS_FETCHING:
      return {
      ...state, isFetching: action.isFetching
      }
    case IS_TOGGLE_FOLLOW:
      return {
        ...state,
        isToggleFollow: action.isToggle
          ? [...state.isToggleFollow, action.userId]
          : state.isToggleFollow.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: GET_USERS, users})
export const setPage = (page) => ({type: SET_PAGE, page})
export const totalUsersCount = (totalCount) => ({type: COUNT_PAGES, count: totalCount})
export const toggleIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const isToggleFollowing = (isToggle, userId) => ({type: IS_TOGGLE_FOLLOW, isToggle, userId})

export default usersReducer