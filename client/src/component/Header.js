import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const navigate = useNavigate()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userEmail,serUserEmail] = useState("heetdhameliya@gmail.com");
    const [userName,setUserName] = useState("heetdhameliya");


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    // ************* route proctection *************************
    // const profileDetails = async()=>{
    //   try {
    //     const response = await axios.get("http://localhost:8000/auth/dashboard/username");
    //     console.log()
    //     console.log()
    //     if(response?.data?.email==="" && response?.data?.userName===""){
    //       navigate("/")
    //     }else{
    //       serUserEmail(response?.data?.email);
    //       setUserName(response?.data?.userName);
    //     }
    //   } catch (error) {
    //     console.log(error)
    //     toast.error("Profile Not Found")
    //   }
    // }
    // life cycle method
    // useEffect(()=>{
    //   profileDetails()
    // },[])
    //********************End code of route protection***************** */

return (
    <div className='h-20 bg-[#0B253D] flex justify-between items-center px-5'>
        <div className="img">
            <h1 className='text-white'>Logo Here</h1>
        </div>
        <div className="profile flex items-center relative">
      <Badge badgeContent={1} color="error">
        <NotificationsIcon style={{color:"white"}} />
      </Badge>
      <div
        className="ml-8 flex items-center px-2 rounded-lg cursor-pointer"
        onClick={toggleDropdown}
      >
         <AccountCircleIcon style={{ color: '#2196f3',fontSize:'50px' }} />
        <div className="ml-4">
          <div className="text-white font-bold">{userName}</div>
          <div className="text-blue-300">{userEmail}</div>
        </div>
        <ExpandMoreIcon style={{ color: '#2196f3' }} />
      </div>
      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
    </div>
)
}

export default Header
