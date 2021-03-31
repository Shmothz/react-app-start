export const getUsersSelector = (state) => {
  return state.usersPage.users
}
export const getTotalCount = (state) => {
  return state.usersPage.totalCount
}
export const getUsersOnPage = (state) => {
  return state.usersPage.usersOnPage
}
export const getActivePage = (state) => {
  return state.usersPage.activePage
}
export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}
export const getIsToggleFollow = (state) => {
  return state.usersPage.isToggleFollow
}
export const getIsAuth = (state) => {
  return state.auth.isAuth
}