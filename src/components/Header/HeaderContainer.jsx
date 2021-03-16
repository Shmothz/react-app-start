import React from "react"
import Header from './Header'
import {connect} from 'react-redux';
import {auth} from '../../redux/auth-reducer';
import {loginAPI} from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    loginAPI.login()
      .then(data => {
        if (data.resultCode === 0) {
          this.props.auth(data.id, data.login, data.email)
        }
      })
  }

  render () {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {}

export default connect(mapStateToProps,{auth})(HeaderContainer)