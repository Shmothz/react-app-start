import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2e2c6623-4ec6-4958-a597-e2f610834595",
  },
});

export const usersAPI = {
  getUsers(activePage = 1, usersOnPage = 5) {
    return instance
      .get(`users?page=${activePage}&count=${usersOnPage}`)
      .then((response) => response.data);
  },
  getPage(page = 1, usersOnPage = 5) {
    return instance
      .get(`users?page=${page}&count=${usersOnPage}`)
      .then((response) => response.data);
  },
  setFollow(id) {
    return instance.delete(`follow/${id}`);
  },
  setUnfollow(id) {
    return instance.post(`follow/${id}`);
  },
};

export const profileAPI = {
  getUserData(userId) {
    return instance.get(`profile/${userId}`);
  },
  getProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  pushProfileStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const loginAPI = {
  me() {
    return instance.get(`auth/me`).then((res) => res.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("auth/login");
  },
};
