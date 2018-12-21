import React from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import { actions } from './store'

class Login extends React.Component {
  render() {
    const { isLogin } = this.props

    if (!isLogin) {
      return <div>输入账号密码 登录哦 && 没有账号请注册 </div>
    }
    return <Redirect to="/" />
  }
}

const mapState = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

const mapDispatch = dispatch => ({
  login(accountEle, pwdEle) {
    dispatch(actions.loginHandler(accountEle.value, pwdEle.value1))
  }
})

export default connect(
  mapState,
  mapDispatch
)(withRouter(Login))
