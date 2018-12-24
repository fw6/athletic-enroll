import React from 'react'
import { Redirect } from 'react-router-dom'
import { InputItem, List, Button } from 'antd-mobile'

import { connect } from 'react-redux'

class Login extends React.Component {
  constructor() {}

  handleChange() {}
  handleSubmit() {}
  render() {
    const { isLogin } = this.props

    if (!isLogin) {
      return (
        <List renderHeader={() => ''}>
          <InputItem
            onChange={val => this.handleChange(val, 'username')}
            placeholder="请输入用户名"
          >
            <div
              style={{
                backgroundImage:
                  'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
                backgroundSize: 'cover',
                height: '22px',
                width: '22px'
              }}
            />
          </InputItem>

          <InputItem
            onChange={val => this.handleChange(val, 'password')}
            type="password"
            placeholder="请输入密码"
          >
            密码
          </InputItem>
          <Button
            onClick={this.handleSubmit}
            type="primary"
            style={{ margin: '0 10px' }}
          >
            提交
          </Button>
        </List>
      )
    }
    return <Redirect to="/" />
  }
}

const mapState = state => ({
  isLogin: state.getIn(['login', 'isLogin'])
})

// const mapDispatch = dispatch => ({
//   // login(accountEle, pwdEle) {
//   //   dispatch(actions.loginHandler(accountEle.value, pwdEle.value1))
//   // }
// })

export default connect(mapState)(Login)
