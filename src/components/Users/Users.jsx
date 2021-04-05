import React from "react";
import userAvatar from "../../assets/images/user.jpg";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";
import Paginator from "./Paginator";

const Users = ({
  users,
  isToggleFollow,
  followTC,
  unfollowTC,
  activePage,
  setActivePage,
  totalCount,
  usersOnPage,
}) => {
  return (
    <div>
      {users.map((i) => (
        <div key={i.id}>
          <div>
            <NavLink to={`/profile/${i.id}`}>
              <img
                className={s.userAvatar}
                src={i.photos.small ? i.photos.small : userAvatar}
                alt={"avatarUsers"}
              />
            </NavLink>
            {i.followed ? (
              <button
                disabled={isToggleFollow.some((id) => id === i.id)}
                className={s.unfollow}
                onClick={() => {
                  followTC(i.id);
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                disabled={isToggleFollow.some((id) => id === i.id)}
                className={s.follow}
                onClick={() => {
                  unfollowTC(i.id);
                }}
              >
                follow
              </button>
            )}
          </div>
          <div>
            <span>{i.name}</span>
          </div>
        </div>
      ))}
      <Paginator
        activePage={activePage}
        setActivePage={setActivePage}
        totalCount={totalCount}
        usersOnPage={usersOnPage}
      />
    </div>
  );
};

export default Users;
