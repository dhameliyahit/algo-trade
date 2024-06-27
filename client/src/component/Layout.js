import React,{useState} from 'react';
import Sidebar from './sideBar.js';
import Market from './Market.js';
import ProfitLossChart from './ProfitLossChart.js';
import Buy from './Buy.js';
import Sell from './Sell.js';
import { Button } from '@mui/material';
import TradeExecuteModal from './TradeExecuteModal';

const Layout = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = [
    { month: 'Jan', profit: 0, loss: 0 },
    { month: 'Feb', profit: 100, loss: 50 },
    { month: 'Mar', profit: 200, loss: 100 },
    { month: 'Apr', profit: 300, loss: 150 },
    { month: 'May', profit: 400, loss: 200 },
    { month: 'Jun', profit: 600, loss: 250 },
    { month: 'Jul', profit: 400, loss: 200 },
    { month: 'Aug', profit: 300, loss: 150 },
    { month: 'Sep', profit: 200, loss: 100 },
    { month: 'Oct', profit: 300, loss: 150 },
    { month: 'Nov', profit: 400, loss: 200 },
    { month: 'Dec', profit: 500, loss: 700 },
  ];


  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-5 bg-[#021629]">
        {/* row of data */}
        <div className="box flex">
            <div className="w-1/5 mx-2 bg-gradient-to-r from-[#472624] to-[#1F1B24] p-8 rounded-lg shadow-lg text-center">
              <div className="text-white text-2xl font-bold">₹3LK</div>
              <div className="text-white text-lg">Investment Value</div>
          </div>
            <div className="w-1/5 mx-2 bg-gradient-to-r from-[#173560] to-[#071c37] p-8 rounded-lg shadow-lg text-center">
              <div className="text-white text-2xl font-bold">₹2.5LK</div>
              <div className="text-white text-lg">Market Value</div>
          </div>
            <div className="w-1/5 mx-2 bg-gradient-to-r from-[#231F57] to-[#0E1737] p-8 rounded-lg shadow-lg text-center">
              <div className="text-white text-2xl font-bold">₹-50,000(-10%)</div>
              <div className="text-white text-lg">Investment Value</div>
          </div>
            <div className="w-1/5 mx-2 bg-gradient-to-r from-[#0C3F32] to-[#041E26] p-8 rounded-lg shadow-lg text-center">
              <div className="text-white text-2xl font-bold">₹0.00</div>
              <div className="text-white text-lg">Investment Value</div>
          </div>
            <div className="w-1/5 mx-2 bg-gradient-to-r from-[#231F32] to-[#0E1E26] p-8 rounded-lg shadow-lg text-center">
            <div className="text-white text-2xl font-bold">₹0.00</div>
              <Button variant="outlined" onClick={handleOpen}>
                 Trade Execute
               </Button>
              <TradeExecuteModal open={open} handleClose={handleClose} />
          </div>
        </div>
        {/* end of data */}
        {/*start => market componet */}
        <div className="flex">
           <Market/>
           <ProfitLossChart data={data} />
        </div>
        {/*end=> market componet */}
        {/* start => buy/sell stocks */}
        <div className="flex">
          <Buy/>
          <Sell/>
        </div>
        {/* end => buy/sell stocks */}
      </main>
    </div>
  );
};

export default Layout;
