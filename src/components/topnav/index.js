import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { Link } from 'react-router-dom'

class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      regform: {
        phone: '',
        password: '',
        username: ''
      }
    }
  }

  render() {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Link key="login" to="/login">
            登录
          </Link>
        ]}
      >
        注册
      </NavBar>
    )
  }
}

export default TopNav
