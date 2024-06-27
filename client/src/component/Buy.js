import React from 'react';

const stocks = [
  { name: 'Sensex', marketPrice: 2351.00, buyPrice: 2300.00, id: 1 },
  { name: 'Nifty 50', marketPrice: 2351.00, buyPrice: 2300.00, id: 2 },
  { name: 'Sensex', marketPrice: 2351.00, buyPrice: 2300.00, id: 3 },
];

const Buy = () => {
  return (
    <div className="p-4 m-3 w-1/2 bg-gray-800 text-white rounded-lg">
      <div className="flex justify-between items-center mb-4 hover:bg-[sky-700]">
        <h2 className="text-lg font-semibold">Buy :</h2>
        <div className="text-xl font-bold">Total : 406.256</div>
      </div>
      <table className="min-w-full bg-gray-700 rounded-lg ">
        <thead>
          <tr className="text-left border-b border-gray-600">
            <th className="p-2">Name</th>
            <th className="p-2">Market Price</th>
            <th className="p-2">Buy Price</th>
            <th className="p-2">Sell</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id} className="hover:bg-[#4190F1]">
              <td className="p-2 flex items-center">
                <img
                  src={stock.name=== "Sensex" ? "./Images/sunsex.png" : "./Images/nifty50.png"}
                  alt={stock.name}
                  className="w-6 h-6 mr-2"
                />
                {stock.name}
              </td>
              <td className="p-2">{stock.marketPrice.toFixed(2)}</td>
              <td className="p-2">{stock.buyPrice.toFixed(2)}</td>
              <td className="p-2 text-red-500 cursor-pointer">Sell</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Buy;
