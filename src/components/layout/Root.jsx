//import React from 'react'

import { Outlet } from "react-router-dom"
import Header from "../header/Header"


function Root() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Root
