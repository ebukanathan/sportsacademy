import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home/Home'
import './Pages.css'

function Pages() {
  return (
    <Routes className="pages">
        <Route path={'/'} element={<Home/>}/>
    </Routes>
  )
}

export default Pages