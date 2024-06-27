import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage.js';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Dashboard from './Pages/Dashboard.js';
import Users from './Pages/Users.js';
import UnlinkUserData from './Pages/UnlinkUserData.js';

function App() {
  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/unlinkUser/:uid' element={<UnlinkUserData/>}></Route>
        <Route path='/*' element={<h1 className='text-5xl'>404 | Page Not Found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
