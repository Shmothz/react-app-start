import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '596562f5-a758-4ade-bff3-b4ee1adb5121'
  }
})

export const usersAPI = {
  getUsers (activePage = 1, usersOnPage = 5) {
    return instance.get(`users?page=${activePage}&count=${usersOnPage}`)
      .then(response => response.data)
  },
  getPage (page = 1 , usersOnPage = 5) {
    return instance.get(`users?page=${page}&count=${usersOnPage}`)
      .then(response => response.data)
  },
  follow (id) {
    return instance.delete(`follow/${id}`)
  },
  unfollow (id) {
    return instance.post(`follow/${id}`)
  }
}

export const loginAPI = {
  login () {
    return instance.get(`auth/me`)
      .then(res => res.data)
  }
}



