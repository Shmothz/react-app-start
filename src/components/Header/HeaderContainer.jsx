import React from "react"
import Header from './Header'
import {connect} from 'react-redux';
import {auth, getAccountTC} from '../../redux/auth-reducer';

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
    data: state.auth.data
  }
}

export default connect(mapStateToProps,{auth,getAccountTC})(HeaderContainer)