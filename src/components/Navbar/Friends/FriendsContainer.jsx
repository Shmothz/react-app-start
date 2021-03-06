import React from 'react'
import Friends from './Friends';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        navPage: state.navPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)