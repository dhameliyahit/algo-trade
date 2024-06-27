import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import axios from 'axios';
import './HomePage.css';
import {useNavigate} from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [disable, setDisable] = useState(true)
  const [sOtp,setSOtp] = useState(false)
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("");
  const [reciveOtp,setReciveOtp] = useState("")



const sendOtp = async () => {
    try {
      setSOtp(true)
      setLoading(true)
      const response = await axios.post(`http://localhost:8000/auth/send-email`, {
        email
      })
      toast.success("OTP send Successfully")
      const rOtp = response?.data?.OTP;
      setReciveOtp(rOtp);
      setLoading(false);
      setDisable(false);
    } catch (error) {
      console.log(error)
      console.log(email)
      toast.error("ERROR ! While OTP send")
    }
  }

const handleLogin=()=>{
  setLoading(true)
  if(reciveOtp === otp){
    toast.success("Login successfull")
    navigate("/dashboard")
    setLoading(false)
  }
  else{
    toast.error("Invaild OTP");
    setLoading(false)
  }
}

  return (
    <div className="w-100 h-screen flex justify-between items-center bg-gradient-to-l from-[#050f19] to-[#11375B] pr-20" >

      <div className="pl-7 img m-0 p-0 flex justify-center items-center h-screen">
        <img style={{
          boxSizing: '10px 10px 10px 0 white'
        }} src="./Images/HomePage-algo.png" className='h-5/2 rounded-2xl border-[#050f19] shadow-inherit' alt="Img" />
      </div>

      <div className='className="login flex-cloumn p-10 rounded-2xl bg-[#021629] border w-1/3 h-auto'>
        <h1 className='my-3 text-2xl text-white'>login</h1>
        <h1 className='text-[#419DF1] text-3xl'>Wellcom Back!</h1>
        <form action="" className='my-3 '>
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium leading-6">
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder=' Enter Your Email'
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <h1 className='text-white py-2'>OTP</h1>
          <div>
            <div className="mt-2">
              <input
                onChange={(e)=>setOtp(e.target.value)}
                value={otp}
                placeholder=' Enter OTP'
                type="email"
                autoComplete="none"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               <div className="pt-3 text-white">
                <Button variant="outlined" disabled={sOtp}  onClick={sendOtp}>{loading ? "Wait.." : "send OTP"}</Button>
              </div> 
            </div>
          </div>
          <p className='text-white py-3'>Don't Recive the OTP? <Button onClick={sendOtp} variant="text">Resend OTP ?</Button> </p>

          <div className="button">
            <Button variant="contained" style={{ width: '100%' }} disabled={disable} onClick={handleLogin} ><span className='text-white'>{loading ? "verification..." : "Login"}</span></Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HomePage
