import React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from 'react-router-dom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-16 bg-[#0B253D] flex flex-col items-center py-4">
      <div className="mb-6">
        <Button onClick={()=>navigate("/dashboard")}>
          <HomeIcon className="text-blue-500" fontSize="large" />
        </Button>
      </div>
      <div className="flex flex-col space-y-6">
        <Button onClick={()=>navigate("/users")}>
          <PeopleAltIcon className='text' fontSize='medium'/>
        </Button>
        <Button onClick={()=>alert("contct")}>
          <ShowChartIcon className="text-blue-500" fontSize="medium" />
        </Button>
        <Button>
          <BuildIcon className="text-blue-500" fontSize="medium" />
        </Button>
        <Button>
          <SettingsIcon className="text-blue-500" fontSize="medium" />
        </Button>
      </div>
      <div className="mt-auto">
        <Button onClick={()=>navigate("/")}>
          <LogoutIcon className="text-blue-500" fontSize="medium" />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
