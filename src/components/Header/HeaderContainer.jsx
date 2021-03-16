import React from "react"
import Header from './Header'
import {connect} from 'react-redux';
import {auth} from '../../redux/auth-reducer';
import {loginAPI} from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    console.log(this.props.data)
    loginAPI.login()
      .then(data => {
        if (data.resultCode === 0) {
          this.props.auth(data.id, data.login, data.email)
        }
      })
  }

  render () {
    return (
      <Header {...this.props} data={this.props.data} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.auth.data
  }
}

export default connect(mapStateToProps,{auth})(HeaderContainer)