import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const UnlinkUserRecord = () => {
  const [data, setData] = useState([]);

  const fetchUnlinkUserRecord = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/user/unlink/data`);
      const userTradeData = response?.data?.data?.userTradeData || [];

      const processedData = userTradeData.flatMap(tradeDate =>
        tradeDate.data.map(item => ({
          date: tradeDate.date,
          ...item
        }))
      );

      setData(processedData);
    } catch (error) {
      console.error(error);
      toast.error('ERROR while getting Unlink User record');
    }
  };

  useEffect(() => {
    fetchUnlinkUserRecord();
  }, []);

  const downloadPDF = () => {
    try {
      // Initialize jsPDF instance
      const doc = new jsPDF();
      
      // Define table columns and rows
      const tableColumn = ['Date', 'Linked Time', 'Kite App', 'Unlinked Time', 'Kite App', 'Index', 'Buy / Sell', 'Reason'];
      const tableRows = data.map(item => [
        item.date,
        item.linkTime,
        'Linked',
        item.unlinkTime,
        'Unlinked',
        item.index,
        item.transaction_type,
        item.reason || 'Network Error'
      ]);
  
      // Add table to PDF
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 20,
        theme: 'striped'
      });
  
      // Save PDF with name
      doc.save("Unlink_User_data.pdf");
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Error generating PDF');
    }
  };

  return (
    <div className="min-h-auto bg-gray-800 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-gray-900 rounded-lg shadow-lg overflow-x-auto">
        <button 
          className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded-lg mb-4"
          onClick={downloadPDF}
        >
          Download PDF
        </button>
        <table className="min-w-full max-w-full w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Linked Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Kite App</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Unlinked Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Kite App</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Index</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Buy / Sell</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Reason</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.linkTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">Linked</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.unlinkTime}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">Unlinked</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.index}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm cursor-pointer ${item.transaction_type === 'SELL' ? 'text-red-500' : 'text-blue-500'}`}>{item.transaction_type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.reason || 'Network Error'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnlinkUserRecord;
