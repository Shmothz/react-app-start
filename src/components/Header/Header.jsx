import React from "react"
import s from './Header.module.css'

const Header = (props) => {
  console.log(props)
    return (
        <header className={s.header}>
            <img src='https://byrutor.org/uploads/posts/2020-04/1586783380_rhet4jhergs.png' alt='logo'/>
            <div className={s.login}>
              {props.data.login}
            </div>
        </header>
    )
}

export default Header;