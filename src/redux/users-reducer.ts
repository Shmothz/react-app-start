import {usersAPI} from '../api/api';
import {UserType} from "../types/types";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const GET_USERS = 'users/GET_USERS'
const COUNT_PAGES = 'users/COUNT_PAGES'
const SET_PAGE = 'users/SET_PAGE'
const IS_FETCHING = 'users/IS_FETCHING'
const IS_TOGGLE_FOLLOW = 'users/IS_TOGGLE_FOLLOW'


let initialState = {
    users: [] as Array<UserType>,
    usersOnPage: 5,
    activePage: 1,
    totalCount: 0,
    isFetching: false,
    isToggleFollow: [] as Array<number> // array of users id
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
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
type FollowActionType = {
    type: typeof FOLLOW
    userId: number
}
type UnfollowActionType = {
    type: typeof UNFOLLOW
    userId: number
}
type SetUsersActionType = {
    type: typeof GET_USERS
    users: Array<UserType>
}
type SetPageActionType = {
    type: typeof SET_PAGE
    page: number
}
type TotalUsersCountActionType = {
    type: typeof COUNT_PAGES
    count: number
}
type ToggleIsFetchingActionType = {
    type: typeof IS_FETCHING
    isFetching: boolean
}
type IsFetchingFollowingActionType = {
    type: typeof IS_TOGGLE_FOLLOW
    isFetching: boolean
    userId: number
}

export const followAC = (userId: number): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: GET_USERS, users})
export const setPage = (page: number): SetPageActionType => ({type: SET_PAGE, page})
export const totalUsersCount = (totalCount: number): TotalUsersCountActionType => ({type: COUNT_PAGES, count: totalCount})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: IS_FETCHING, isFetching})
export const isFetchingFollowing = (isFetching: boolean, userId: number): IsFetchingFollowingActionType => ({type: IS_TOGGLE_FOLLOW, isFetching, userId})

export const setUsersTC = (activePage: number, usersOnPage: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    const res = await usersAPI.getUsers(activePage, usersOnPage)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
    dispatch(totalUsersCount(res.totalCount))
}
export const setActivePageTC = (pageNumber: number, usersOnPage: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setPage(pageNumber))
    const res = await usersAPI.getPage(pageNumber, usersOnPage)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
}
export const followTC = (userId: number) => async (dispatch: any) => {
    dispatch(isFetchingFollowing(true, userId))
    const res = await usersAPI.setFollow(userId)
    if (res.data.resultCode === 0) {
        dispatch(unfollowAC(userId))
        dispatch(isFetchingFollowing(false, userId))
    }

}
export const unfollowTC = (userId: number) => async (dispatch: any) => {
    dispatch(isFetchingFollowing(true, userId))
    const res = await usersAPI.setUnfollow(userId)
    if (res.data.resultCode === 0) {
        dispatch(followAC(userId))
        dispatch(isFetchingFollowing(false, userId))
    }
}

export default usersReducer