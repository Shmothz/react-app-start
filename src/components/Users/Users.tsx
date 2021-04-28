import React, {FC} from "react";
import userAvatar from "../../assets/images/user.jpg";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";

type PropsType = MapStatePropsType & MapDispatchPropsTypes & OwnPropsTypes
type MapStatePropsType = {
    activePage: number
    usersOnPage: number
    totalCount: number
    users: Array<UserType>
    isToggleFollow: number[]
    portionPages: number
}
type MapDispatchPropsTypes = {
    unfollowTC: (userId: number) => void
    followTC: (userId: number) => void
    setActivePageTC: (page: number, usersOnPage: number) => void
}
type OwnPropsTypes = {}

const Users: FC<PropsType> = ({
                                  users,
                                  isToggleFollow,
                                  followTC,
                                  unfollowTC,
                                  activePage,
                                  setActivePageTC,
                                  totalCount,
                                  usersOnPage,
                                  portionPages
                              }) => {
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img
                                className={s.userAvatar}
                                src={user.photos.small ? user.photos.small : userAvatar}
                                alt={"avatarUsers"}
                            />
                        </NavLink>
                        {user.followed ? (
                            <button
                                disabled={isToggleFollow.some((id) => id === user.id)}
                                className={s.unfollow}
                                onClick={() => {
                                    followTC(user.id);
                                }}
                            >
                                unfollow
                            </button>
                        ) : (
                            <button
                                disabled={isToggleFollow.some((id) => id === user.id)}
                                className={s.follow}
                                onClick={() => {
                                    unfollowTC(user.id);
                                }}
                            >
                                follow
                            </button>
                        )}
                    </div>
                    <div>
                        <span>{user.name}</span>
                    </div>
                </div>
            ))}
            <Paginator
                activePage={activePage}
                setActivePageTC={setActivePageTC}
                totalCount={totalCount}
                usersOnPage={usersOnPage}
                portionPages={portionPages}
            />
        </div>
    );
};

export default Users;
