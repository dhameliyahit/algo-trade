import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'; // Update import path

const users = [
  { id: 1, name: 'John K D’Souza', email: 'John12@gmail.com', dematId: '#012345678', status: 'Block' },
  { id: 1, name: 'John K D’Souza', email: 'John12@gmail.com', dematId: '#012345678', status: 'Block' },
  { id: 1, name: 'John K D’Souza', email: 'John12@gmail.com', dematId: '#012345678', status: 'Block' },
  { id: 1, name: 'John K D’Souza', email: 'John12@gmail.com', dematId: '#012345678', status: 'Block' },
  { id: 1, name: 'John K D’Souza', email: 'John12@gmail.com', dematId: '#012345678', status: 'Block' },
  // Add more users as needed
];

const UserTable = () => {
  return (
    <div className="flex items-center h-min w-4/6">
        <table className="w-full rounded-md mx-3">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email Id</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Demat Id</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, index) => (
         <tr key={index} className="hover:bg-[#419Df1] hover:text-white">
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <img className="h-10 w-10 rounded-full" src={`./Images/profileLogo.svg`} alt="" />
                  <span className="ml-4 text-sm font-medium text-white">{user.name}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{user.dematId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center">
                  <button className="text-blue-500 hover:text-blue-300 mr-2">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-300">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                  <button className={`ml-4 ${user.status === 'Block' ? 'text-red-500' : 'text-green-500'} hover:text-red-300`}>
                    {user.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default UserTable;
