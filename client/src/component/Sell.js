import React from 'react';

const sellStocks = [
  { name: 'Sensex', buyPrice: 2351.00, sellPrice: 2350.00, type: 'Market', id: 1 },
  { name: 'Nifty 50', buyPrice: 2351.00, sellPrice: 2250.00, type: 'Limit', id: 2 },
  { name: 'Sensex', buyPrice: 2351.00, sellPrice: 2400.00, type: 'Market', id: 3 },
  { name: 'Nifty 50', buyPrice: 2351.00, sellPrice: 2250.00, type: 'Limit', id: 4 },
];

const Sell = () => {
  return (
    <div className="p-4 m-3 w-1/2 bg-gray-800 text-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sell :</h2>
        <div className="text-xl font-bold text-red-500">Total : 409.256</div>
      </div>
      <table className="min-w-full bg-gray-700 rounded-lg">
        <thead>
          <tr className="text-left border-b border-gray-600">
            <th className="p-2">Name</th>
            <th className="p-2">Buy Price</th>
            <th className="p-2">Sell Price</th>
            <th className="p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {sellStocks.map((stock) => (
            <tr key={stock.id} className={`${stock.type=== "Limit" ? "hover:bg-red-800 " : "hover:bg-[#FF5555]"}`}>
              <td className="p-2 flex items-center">
                <img
                  src={stock.name === 'Sensex' ? '/Images/sunsex.png' : '/Images/nifty50.png'}
                  alt={stock.name}
                  className="w-6 h-6 mr-2"
                />
                {stock.name}
              </td>
              <td className="p-2">{stock.buyPrice.toFixed(2)}</td>
              <td className="p-2">{stock.sellPrice.toFixed(2)}</td>
              <td className="p-2">
                <span className={stock.type === 'Market' ? 'text-green-500' : 'text-white'}>
                  {stock.type}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sell;
