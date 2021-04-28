import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import {getIsAuth} from '../helper/selectors';

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuth(state)
  }
}

const RedirectComponent = (Component) => {
  class withoutAuthRedirect extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'}/>
      return <Component {...this.props} />
    }
  }
  return connect(mapStateToProps, {})(withoutAuthRedirect)
}

export default RedirectComponent


