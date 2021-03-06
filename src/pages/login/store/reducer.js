import { fromJS } from 'immutable'
import { types } from '../store'

const defaultState = fromJS({
  isLogin: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return state.set('isLogin', action.value)
    case types.LOGOFF:
      return state.set('isLogin', action.value)
    default:
      return state
  }
}
