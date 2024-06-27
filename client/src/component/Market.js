import React,{useState,useEffect} from 'react';


const marketData = [
  { name: 'Sensex', price: 2351.00, changes: +1.85, isPositive: true },
  { name: 'Fin Nifty', price: 2351.00, changes: -1.85, isPositive: false },
  { name: 'Mid cap', price: 2351.00, changes: +1.85, isPositive: true },
  { name: 'Nifty 50', price: 2351.00, changes: -1.85, isPositive: false },
  { name: 'Bank nifty', price: 2351.00, changes: +1.85, isPositive: false },
];


const Market = () => {
  const APP_KEY = "e4d20159220f4b5c8f50de12efa90e5c"
  const [stock,setStock] = useState([])
  const allExchange = async()=>{
    try {
      const data = "" //await axios.get("https://api.twelvedata.com/stocks");
      console.log(data)
      setStock(data)
    } catch (error) {
      console.log(error)
    }
  }
useEffect(()=>{
  allExchange()
},[])
  return (
<div className="p-4 m-3 bg-gray-800 text-white w-1/2 rounded-lg">
      {JSON.stringify(stock)}
      <h2 className="text-lg font-semibold mb-4">Market</h2>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-700">
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Changes</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((item, index) => (
            <tr key={index} className="border-b border-gray-600 hover:bg-sky-700">
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.price.toFixed(2)}</td>
              <td className={`py-2 px-4 ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {item.isPositive ? '+' : ''}{item.changes.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Market;
