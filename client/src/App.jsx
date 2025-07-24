import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home_componets/Home'
import './App.css'
import DoctorDashboard from './doctors components/DoctorDashboard'
import Cart from "./CartComponet/Cart";
import DoctorAppointment from "./AppoinmentComponet/DoctorAppointment";
import AdminDashboard from "./admin_components/AdminDashboard";
import AdminLogin from "./admin_components/AdminLogin";
import AdminRegister from "./admin_components/AdminRegister";
import Signup from "./RegistrationandLogin/Signup";
import Login from "./RegistrationandLogin/Login";
import DoctorRegister from "./doctors components/DoctorRegister";
import DoctorLogin from "./doctors components/DoctorLogin";
import PrivateRoute from "./Privateroute/PrivateRoute";
function App() {


  return (
    <>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/home" element={<Home/>}/>
        <Route path="/appoinment" element={<DoctorAppointment/>}/>
        {/* <Route path="/admin" element={<Home/>}/> */}
        <Route path="/Doctorsregistraion" element={<DoctorRegister/>}/>
        <Route path="/Doctorslogin" element={<DoctorLogin/>}/>
        <Route path="/home/DoctorPannel" element={<DoctorDashboard/>}/>
        <Route path="home/cart" element={<Cart/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/adminRegister" element={<AdminRegister/>}/>
        <Route path="/adminDashboard" element={<PrivateRoute><AdminDashboard/></PrivateRoute>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
