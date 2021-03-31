import React from "react"
import Header from './Header'
import {connect} from 'react-redux'
import {logoutTC} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {


  render () {
    return (
      <Header {...this.props} data={this.props.data} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.auth.data,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps,{logoutTC})(HeaderContainer)