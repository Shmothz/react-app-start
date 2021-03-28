import React from "react"
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://byrutor.org/uploads/posts/2020-04/1586783380_rhet4jhergs.png' alt='logo'/>
      <div className={s.login}>
        {
          props.isAuth
            ? <div>{props.data.login}
              <button onClick={props.logoutTC}> Logout </button>
            </div>
            : <NavLink to={'/login'}> Login </NavLink>
        }
      </div>
    </header>
  )
}

export default Header;