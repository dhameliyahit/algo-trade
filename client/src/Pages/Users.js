import React from 'react'
import Header from '../component/Header'
import Sidebar from '../component/sideBar'
import UserTable from '../component/UserTable'
import UnlinkedUserList from '../component/unlinkUser'

const Users = () => {
  return (
    <>
      <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-grow p-5 bg-[#021629]">
            <h1 className='text-white text-xl'>User Details</h1>
          <div className="relative my-2">
            <input type="text" className="bg-gray-800 text-white placeholder-gray-400 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search Here" />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.9-6.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
            </svg>
          </div>
          <div className="flex">
            <UserTable/>
            <UnlinkedUserList/>
          </div>
          </main>
        </div>
    
    </>
  )
}

export default Users
