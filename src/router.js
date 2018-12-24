import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TopNav from './components/topnav'

import Enroll from './pages/enroll'
import Login from './pages/login'
import Register from './pages/register'

export default () => (
  <Router>
    <>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Enroll} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reg" component={Register} />
      </Switch>
    </>
  </Router>
)
