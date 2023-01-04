import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from './Homepage.js'
import ProfileContainer from './ProfileContainer.js'
import SearchContainer from './SearchContainer.js'

export const App = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/home' element={<Homepage />} />
        <Route exact path='/users/:id' element={<ProfileContainer />} />
        <Route exact path='/plants' element={<SearchContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
