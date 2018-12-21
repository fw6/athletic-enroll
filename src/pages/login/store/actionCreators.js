import Axios from 'axios'
import { types } from '../store'

const changeLogin = value => ({
  type: types.LOGIN,
  value
})

export const loginHandler = (account, pwd) => {
  return dispatch => {
    Axios.get(`/api/login.json?account=${account}&pwd=${pwd}`)
      .then(res => {
        const data = res.data
        if (data.success && data.data) {
          dispatch(changeLogin(data.data))
        } else {
          alert('登录失败')
        }
      })
      .catch(err => console.error(err))
  }
}

export const logoff = () => ({
  type: types.LOGOFF,
  value: false
})
