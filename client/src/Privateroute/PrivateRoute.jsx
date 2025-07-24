import React from 'react'
import Login from '../RegistrationandLogin/Login'
import AdminLogin from '../admin_components/AdminLogin'

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("token")
  return token ? children:<AdminLogin/>
}

export default PrivateRoute