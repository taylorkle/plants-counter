import React from 'react'
import Homepage from './Homepage.js'
import { BrowserRouter, Route, Switch } from "react-router-dom"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/home' component={Homepage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
