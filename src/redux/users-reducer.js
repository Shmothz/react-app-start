import {usersAPI} from '../api/api';

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const GET_USERS = 'users/GET_USERS'
const COUNT_PAGES = 'users/COUNT_PAGES'
const SET_PAGE = 'users/SET_PAGE'
const IS_FETCHING = 'users/IS_FETCHING'
const IS_TOGGLE_FOLLOW = 'users/IS_TOGGLE_FOLLOW'

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
        isToggleFollow: action.isFetching
          ? [...state.isToggleFollow, action.userId]
          : state.isToggleFollow.filter(id => id !== action.userId)
      }
    default:
      return state
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: GET_USERS, users})
export const setPage = (page) => ({type: SET_PAGE, page})
export const totalUsersCount = (totalCount) => ({type: COUNT_PAGES, count: totalCount})
export const toggleIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const isFetchingFollowing = (isFetching, userId) => ({type: IS_TOGGLE_FOLLOW, isFetching, userId})

export const setUsersTC = (activePage, usersOnPage) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  const res = await usersAPI.getUsers(activePage, usersOnPage)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(res.items))
  dispatch(totalUsersCount(res.totalCount))
}
export const setActivePageTC = (pageNumber, usersOnPage) => async (dispatch) => {
  dispatch(toggleIsFetching(true))
  dispatch(setPage(pageNumber))
  const res = await usersAPI.getPage(pageNumber, usersOnPage)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(res.items))
}
export const followTC = (userId) => async (dispatch) => {
  dispatch(isFetchingFollowing(true, userId))
  const res = await usersAPI.setFollow(userId)
  if (res.data.resultCode === 0) {
    dispatch(unfollowAC(userId))
    dispatch(isFetchingFollowing(false, userId))
  }

}
export const unfollowTC = (userId) => async (dispatch) => {
  dispatch(isFetchingFollowing(true, userId))
  const res = await usersAPI.setUnfollow(userId)
  if (res.data.resultCode === 0) {
    dispatch(followAC(userId))
    dispatch(isFetchingFollowing(false, userId))
  }
}

export default usersReducer