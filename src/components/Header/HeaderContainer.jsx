import React from "react"
import Header from './Header'
import {connect} from 'react-redux';
import {auth, getAccountTC, logoutTC} from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {this.props.getAccountTC()}

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

export default connect(mapStateToProps,{auth,getAccountTC, logoutTC})(HeaderContainer)