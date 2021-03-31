import React from "react";
import Navbar from './Navbar';
import {connect} from 'react-redux';

class NavbarContainer extends React.Component {
  render() {
    return (
      <Navbar {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.auth.data
  }
}

export default connect(mapStateToProps,{})(NavbarContainer)