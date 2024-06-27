import React, { useState, useEffect } from 'react'
import Header from '../component/Header'
import Sidebar from '../component/sideBar'
import { useParams } from 'react-router-dom'; // Ensure the path is correct
import axios from 'axios'
import { toast } from 'react-toastify'
import { saveAs } from 'file-saver';
import UnlinkUserRecord from './UnlinUserRecord';

const UnlinkUserData = () => {
  const id = useParams();
  const [user, setUser] = useState([])

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDownload = () => {
    // Define the URL of the PDF file
    const pdfUrl = '/path/to/your/file.pdf';

    // Use file-saver to download the file
    saveAs(pdfUrl, 'downloaded_file.pdf');
  };

  const UnlinkUser = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_API}/user/unlink/find/${id?.uid}`)
      console.log(data?.data?.user)
      setUser(data?.data?.user)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    UnlinkUser()
  }, [])

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-5 bg-[#021629] text-white">
          <div className="flex items-center ">

            <div className="flex items-center w-1/4 p-2">
              <h1 className='text-3xl mr-10 '> {user?.name}</h1>
              <p className='text-[#419DF1]'> . {user?.demateId}</p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-gray-800 text-white p-2 rounded-lg focus:outline-none"
                placeholder='Start Date'
              />
              <span className="text-white">To</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                placeholder="End Date"
                className="bg-gray-800 text-white p-2 rounded-lg focus:outline-none"
              />
            </div>
        </div>
          <div className="flex justify-center p-4">
              <UnlinkUserRecord/> 
          </div>
        </main>
      </div>
    </>
  )
}

export default UnlinkUserData
