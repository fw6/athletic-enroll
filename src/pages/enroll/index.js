import React from 'react'
import { connect } from 'react-redux'

// import { actions } from './store'

class Register extends React.Component {
  render() {
    return <h2>报名吧</h2>
  }
}

const mapState = state => ({
  // isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatch = dispatch => ({
  // login(accountEle, pwdEle) {
  //   dispatch(actions.loginHandler(accountEle.value, pwdEle.value1))
  // }
})

export default connect(
  mapState,
  mapDispatch
)(Register)
