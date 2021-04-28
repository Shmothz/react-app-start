import {ActiveStateType} from "../redux/redux-store";

export const getUsersSelector = (state:ActiveStateType) => {
  return state.usersPage.users
}
export const getTotalCount = (state:ActiveStateType) => {
  return state.usersPage.totalCount
}
export const getUsersOnPage = (state:ActiveStateType) => {
  return state.usersPage.usersOnPage
}
export const getActivePage = (state:ActiveStateType) => {
  return state.usersPage.activePage
}
export const getIsFetching = (state:ActiveStateType) => {
  return state.usersPage.isFetching
}
export const getIsToggleFollow = (state:ActiveStateType) => {
  return state.usersPage.isToggleFollow
}
export const getIsAuth = (state:ActiveStateType) => {
  return state.auth.isAuth
}
export const getDialogs = (state:ActiveStateType) => {
  return state.dialogsPage.dialogs
}
export const getMessages = (state:ActiveStateType) => {
  return state.dialogsPage.messages
}