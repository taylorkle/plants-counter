import React from 'react'
import Homepage from './Homepage.js'
import ProfileContainer from './ProfileContainer.js'
import SearchContainer from './SearchContainer.js'
import { BrowserRouter, Route, Switch } from "react-router-dom"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/home' component={Homepage} />
        <Route exact path='/users/:id' component={ProfileContainer} />
        <Route exact path='/plants' component={SearchContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
