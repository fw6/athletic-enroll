import React from 'react'
import axios from 'axios'
import { List, InputItem, Toast, Button } from 'antd-mobile'
import { Redirect } from 'react-router-dom'

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '',
      password: '',
      username: '',
      authcode: '',
      regSuccess: false
    }
    this.textInput = React.createRef()
    this.handleChange = this.handleChange.bind(this)
    this.handlePWAuth = this.handlePWAuth.bind(this)
  }

  handleChange(value, type) {
    const newState = {}
    newState[type] = value
    this.setState(provState => {
      provState[type] = value
      return provState
    })
  }

  handlePWAuth(value) {
    if (value !== this.state.password && value !== '') {
      this.failToast()
      this.textInput.current.focus()
    }
  }

  handleSubmit() {
    // 提交数据
    axios
      .post({
        method: 'post',
        url: '/reg',
        data: { ...this.state }
      })
      .then(res => {
        if (!res.code) {
          this.setState({
            regSuccess: true
          })
        }
      })
  }

  failToast() {
    Toast.fail('两次密码不一致', 1)
  }

  render() {
    console.log(this.state)
    return (
      <>
        <List renderHeader={() => ''}>
          <InputItem
            onChange={val => this.handleChange(val, 'phone')}
            type="phone"
            placeholder="请输入手机号"
          >
            手机号码
          </InputItem>

          <List.Item
            extra={
              <Button type="primary" size="small" inline>
                获取验证码
              </Button>
            }
          >
            <List.Item.Brief style={{ marginTop: 0 }}>
              <InputItem
                onChange={val => this.handleChange(val, 'phone')}
                placeholder="请输入验证码"
              />
            </List.Item.Brief>
          </List.Item>

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

          <InputItem
            onBlur={val => this.handlePWAuth(val, 'password')}
            type="password"
            placeholder="确认密码"
            ref={this.textInput}
          >
            再次输入
          </InputItem>

          <div className="mima">
            密码由6-16位数字，字母或符号组成，不能是6位一下纯数字。
          </div>
          <Button
            onClick={this.handleSubmit}
            type="primary"
            style={{ margin: '0 10px' }}
          >
            提交
          </Button>
        </List>

        {this.state.regSuccess ? <Redirect to="/" /> : null}
      </>
    )
  }
}

export default RegisterForm
