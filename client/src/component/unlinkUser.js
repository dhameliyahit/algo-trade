import React, {useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {toast} from "react-toastify"
import axios from 'axios'


const UnlinkedUserList = () => {
  const [users,setUsers] = useState([])
  const navigate = useNavigate();

  const allUnlinkUser = async() =>{
    try {
      const user = await axios.get("http://localhost:8000/user/unlink/all");
      console.log(user?.data?.data)
      setUsers(user?.data?.data)
    } catch (error) {
      console.log(error)
      toast.error("UnlinkUser Not Get")
    }
  }

  useEffect(()=>{
    allUnlinkUser()
  },[])

  return (
    <>
      <div className="h-min w-1/3  flex justify-center items-center">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold text-white mb-4">Unlinked User's List</h2>
          <ul>
            {users.map((user,index) => (
              <button key={index} className='flex items-center w-full' onClick={()=>navigate(`/unlinkUser/${user._id}`)}>
                <li key={user.id} className="hover:bg-blue-400 flex items-center min-w-full text-white bg-gray-700 rounded-lg p-3 mb-2">
                  <img className="h-12 w-12 rounded-full" src={"https://picsum.photos/200"} alt={`${user.name}'s avatar`} />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-white">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.demateId}</p>
                  </div>
                </li>
              </button>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UnlinkedUserList;
