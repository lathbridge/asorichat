import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Homepage from '../pages/home'
import Signuppage from '../pages/signup'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/signup' element={<Signuppage/>} />
    </Routes>
  )
}

export default AllRoutes